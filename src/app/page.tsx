"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─────────────────────────────────────────────
// Products
// ─────────────────────────────────────────────
const PRODUCTS = [
  {
    title: "TypeScript命名規約チェッカー",
    description: "「TypeScript Naming Convention Checker」というvscodeの拡張機能です。",
    url: "https://marketplace.visualstudio.com/items?itemName=hanablabs001.naming-convention-checker",
  },
  {
    title: "coming soon...",
    description: "chromeで遊べる猫育成ゲームを製作中です🐈",
    url: "",
  },
];

// ─────────────────────────────────────────────
// Note 記事
// ─────────────────────────────────────────────
const NOTE_ARTICLES = [
  {
    title: "伝わる議事録の書き方",
    description: "会議に出ていない人にも伝わる議事録の書き方をご紹介しています。",
    url: "https://note.com/hn_a_b",
  },
  {
    title: "電子署名の仕組みについて",
    description: "「わかりそうでわからない」電子署名について解説しています。",
    url: "https://note.com/hn_a_b/n/n3427abf16500?sub_rt=share_sb",
  },
  {
    title: "DB設計を基礎からわかりやすく",
    description: "データベース設計について初学者向けにわかりやすく解説しています。",
    url: "https://note.com/hn_a_b/n/n9b5a004a0536?sub_rt=share_sb",
  },
  {
    title: "coming soon...",
    description: "記事の概要をここに書きます。",
    url: "",
  },
];

// ─────────────────────────────────────────────
// ポップアップ
// ─────────────────────────────────────────────
const POPUP_NOTES = [
  {
    header: "✦ coming soon... ✦",
    title: "名称未定",
    description: "遊べる猫育成ゲームを製作中🐈",
    url: "",
  },
  {
    header: "✦ twitter ✦",
    title: "私の家の猫",
    description: "可愛い下からアングルの画像を公開中",
    url: "https://x.com/hn_a_b/status/2024422437946089945?s=20",
  },
  {
    header: "✦ notice ✦",
    title: "画面をクリックしてみて！",
    description: "画面をクリックしたり、ポップアップを移動させるとキラキラのエフェクトがでるよ☆",
    url: "",
  },
];


function makePRNG(seed: number) {
  let s = seed >>> 0;
  return () => {
    s ^= s << 13;
    s ^= s >> 17;
    s ^= s << 5;
    return ((s >>> 0) & 0x7fffffff) / 0x7fffffff;
  };
}

const rng = makePRNG(20240101);

const BUBBLE_DATA = Array.from({ length: 9 }, () => ({
  left:     rng() * 95,
  dur:      16 + rng() * 24,
  delay:    -(rng() * 20),
  size:     8  + rng() * 30,
  swayDur:  2  + rng() * 4,
}));


function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div id="custom-cursor" ref={ref}>
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="14" cy="8" rx="5" ry="8" fill="#f0abfc" opacity="0.9" transform="rotate(0 14 14)" />
        <ellipse cx="14" cy="8" rx="5" ry="8" fill="#c084fc" opacity="0.75" transform="rotate(72 14 14)" />
        <ellipse cx="14" cy="8" rx="5" ry="8" fill="#f0abfc" opacity="0.9" transform="rotate(144 14 14)" />
        <ellipse cx="14" cy="8" rx="5" ry="8" fill="#c084fc" opacity="0.75" transform="rotate(216 14 14)" />
        <ellipse cx="14" cy="8" rx="5" ry="8" fill="#f0abfc" opacity="0.9" transform="rotate(288 14 14)" />
        <circle cx="14" cy="14" r="3" fill="#fff" opacity="0.95" />
        <circle cx="14" cy="14" r="1.5" fill="#f9a8d4" />
      </svg>
    </div>
  );
}

interface PopupData {
  id: number;
  header: string;
  title: string;
  description: string;
  url: string;
  x: number;
  y: number;
  visible: boolean;
  closing: boolean;
  zIndex: number;
}

function Popup({
  popup,
  onClose,
  onFocus,
  onDragMove,
}: {
  popup: PopupData;
  onClose: (id: number) => void;
  onFocus: (id: number) => void;
  onDragMove: (x: number, y: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const startDrag = useCallback(
    (startX: number, startY: number) => {
      if (!ref.current) return;
      onFocus(popup.id);

      const rect = ref.current.getBoundingClientRect();
      const ox = startX - rect.left;
      const oy = startY - rect.top;
      let lastSparkle = 0;

      const onMove = (cx: number, cy: number) => {
        if (!ref.current) return;
        const nx = cx - ox;
        const ny = cy - oy;
        const maxX = window.innerWidth - ref.current.offsetWidth;
        const maxY = window.innerHeight - ref.current.offsetHeight;
        ref.current.style.left = Math.max(0, Math.min(nx, maxX)) + "px";
        ref.current.style.top = Math.max(0, Math.min(ny, maxY)) + "px";
        const now = Date.now();
        if (now - lastSparkle > 40) {
          onDragMove(cx, cy);
          lastSparkle = now;
        }
      };

      const onMouseMove = (e: MouseEvent) => onMove(e.clientX, e.clientY);
      const onTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        onMove(e.touches[0].clientX, e.touches[0].clientY);
      };
      const cleanup = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", cleanup);
        window.removeEventListener("touchmove", onTouchMove);
        window.removeEventListener("touchend", cleanup);
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", cleanup);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", cleanup);
    },
    [popup.id, onFocus]
  );

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      startDrag(e.clientX, e.clientY);
    },
    [startDrag]
  );

  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      startDrag(e.touches[0].clientX, e.touches[0].clientY);
    },
    [startDrag]
  );

  if (!popup.visible) return null;

  const stopDrag = (e: React.MouseEvent | React.TouchEvent) => e.stopPropagation();

  return (
    <div
      ref={ref}
      className={`popup-window${popup.closing ? " closing" : ""}`}
      style={{ left: popup.x, top: popup.y, zIndex: popup.zIndex }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <div className="popup-titlebar">
        <span>{popup.header}</span>
        <button
          className="popup-close-btn"
          onClick={() => onClose(popup.id)}
          onMouseDown={stopDrag}
          onTouchStart={stopDrag}
        >
          ✕
        </button>
      </div>

      <div className="popup-body">
        <p className="font-bold mb-1 leading-snug" style={{ fontSize: 14, color: "#4a3050" }}>
          {popup.title}
        </p>
        <p style={{ fontSize: 12, color: "#7c5c8a", marginBottom: 12 }}>
          {popup.description}
        </p>
        <div className="flex gap-3 justify-end">
          <button
            className="popup-btn popup-btn-yes"
            onClick={() => popup.url ? window.open(popup.url, "_blank") : onClose(popup.id)}
            onMouseDown={stopDrag}
            onTouchStart={stopDrag}
          >
            はい
          </button>
          <button
            className="popup-btn popup-btn-no"
            onClick={() => onClose(popup.id)}
            onMouseDown={stopDrag}
            onTouchStart={stopDrag}
          >
            いいえ
          </button>
        </div>
      </div>
    </div>
  );
}

type CardItem = { title: string; description: string; url: string };

function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8, alignContent: "start", alignItems: "start" }}>
      {items.map((item, i) => (
        <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="work-card">
          <div style={{ fontWeight: 700, fontSize: "clamp(11px, 2vw, 13px)", color: "#4a3050", marginBottom: 3, lineHeight: 1.3 }}>
            {item.title}
          </div>
          <div style={{ fontSize: 10, color: "#7c5c8a", marginBottom: 6, lineHeight: 1.4 }}>
            {item.description}
          </div>
          <span style={{ fontFamily: "var(--font-en)", fontSize: 11, fontWeight: 700, color: "#c084fc", visibility: item.url && item.url !== "#" ? "visible" : "hidden" }}>
            みてみる →
          </span>
        </a>
      ))}
    </div>
  );
}

function CardSection({ title, items, maxVisible }: { title: string; items: CardItem[]; maxVisible: number }) {
  const [showModal, setShowModal] = useState(false);
  const visible = items.slice(0, maxVisible);
  const hasMore = items.length > maxVisible;

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
      <h2 style={{ fontFamily: "var(--font-en)", fontSize: "clamp(12px, 2vw, 15px)", fontWeight: 800, color: "#a855f7", letterSpacing: "0.1em", textAlign: "center", marginBottom: 8, flexShrink: 0 }}>
        ✦ {title} ✦
      </h2>
      <CardGrid items={visible} />
      {hasMore && (
        <button
          onClick={() => setShowModal(true)}
          style={{ marginTop: 8, fontFamily: "var(--font-en)", fontSize: 11, fontWeight: 700, color: "#c084fc", background: "transparent", border: "1.5px solid #c084fc", borderRadius: 999, padding: "4px 14px", cursor: "pointer", alignSelf: "center" }}
        >
          もっと見る ↓
        </button>
      )}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span>✦ {title} ✦</span>
              <button className="popup-close-btn" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <div style={{ overflow: "auto", flex: 1, padding: "12px 14px" }}>
              <CardGrid items={items} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type SparkleItem = { id: number; x: number; y: number; size: number; color: string; char: string; dx?: number; dy?: number };
const SPARKLE_COLORS = ["#f0abfc", "#c084fc", "#e879f9", "#f9a8d4", "#ffffff"];
const SPARKLE_CHARS  = ["✦", "✧", "✦", "✧", "✿"];

function SparkleElement({ s }: { s: SparkleItem }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (s.dx !== undefined && s.dy !== undefined) {
      el.animate(
        [
          { opacity: 1, transform: "translate(-50%, -50%) scale(0.4)" },
          { opacity: 0.8, offset: 0.6 },
          { opacity: 0, transform: `translate(calc(-50% + ${s.dx}px), calc(-50% + ${s.dy}px)) scale(1.1)` },
        ],
        { duration: 700, easing: "ease-out", fill: "forwards" }
      );
    } else {
      el.animate(
        [
          { opacity: 1, transform: "translate(-50%, -50%) scale(0.3)" },
          { opacity: 1, transform: "translate(-50%, -50%) scale(1.3)", offset: 0.35 },
          { opacity: 0, transform: "translate(-50%, calc(-50% - 18px)) scale(0.6)" },
        ],
        { duration: 700, easing: "ease", fill: "forwards" }
      );
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        left: s.x,
        top: s.y,
        fontSize: s.size,
        color: s.color,
        pointerEvents: "none",
        zIndex: 5000,
        lineHeight: 1,
        opacity: 0,
      }}
    >
      {s.char}
    </div>
  );
}

export default function Home() {
  const [popups, setPopups] = useState<PopupData[]>([]);
  const [sparkles, setSparkles] = useState<SparkleItem[]>([]);
  const [maxVisible, setMaxVisible] = useState(4);
  const zCounter = useRef(1010);
  const sparkleId = useRef(0);
  const heroRef = useRef<HTMLElement>(null);

  const addSparkle = useCallback((x: number, y: number) => {
    const id = ++sparkleId.current;
    setSparkles(prev => [
      ...prev.slice(-20),
      {
        id,
        x: x + (Math.random() - 0.5) * 24,
        y: y + (Math.random() - 0.5) * 24,
        size: 8 + Math.random() * 10,
        color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
        char: SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)],
      },
    ]);
    setTimeout(() => setSparkles(prev => prev.filter(s => s.id !== id)), 700);
  }, []);

  const handleBgClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button, a, input, .popup-window")) return;
    const { clientX: x, clientY: y } = e;
    const count = 16;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.4;
      const dist = 50 + Math.random() * 80;
      const id = ++sparkleId.current;
      const item: SparkleItem = {
        id, x, y,
        size: 8 + Math.random() * 12,
        color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
        char: SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)],
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist,
      };
      setSparkles(prev => [...prev.slice(-30), item]);
      setTimeout(() => setSparkles(prev => prev.filter(s => s.id !== id)), 750);
    }
  }, []);

  useEffect(() => {
    const update = () => setMaxVisible(window.innerWidth < 600 ? 2 : 4);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const heroBottom = heroRef.current
      ? heroRef.current.getBoundingClientRect().bottom
      : vh * 0.4;
    const pw = vw < 600 ? Math.min(240, vw - 32) : 300;
    const ph = 160;
    const margin = 12;

    const overlaps = (x: number, y: number, placed: { x: number; y: number }[]) =>
      placed.some(
        (p) =>
          x < p.x + pw + margin &&
          x + pw + margin > p.x &&
          y < p.y + ph + margin &&
          y + ph + margin > p.y
      );
    const placed: { x: number; y: number }[] = [];
    const positions = POPUP_NOTES.map(() => {
      const minY = heroBottom + margin;
      const maxX = vw - pw - margin;
      const maxY = vh - ph - margin;
      let x = 0, y = 0, tries = 0;
      do {
        x = margin + Math.random() * (maxX - margin);
        y = minY + Math.random() * Math.max(0, maxY - minY);
        tries++;
      } while (overlaps(x, y, placed) && tries < 100);
      placed.push({ x, y });
      return { x, y };
    });

    POPUP_NOTES.forEach((note, i) => {
      setTimeout(() => {
        setPopups((prev) => [
          ...prev,
          {
            id: i,
            header: note.header,
            title: note.title,
            description: note.description,
            url: note.url,
            x: positions[i].x,
            y: positions[i].y,
            visible: true,
            closing: false,
            zIndex: 1000 + i,
          },
        ]);
      }, i * 500);
    });
  }, []);

  const closePopup = useCallback((id: number) => {
    setPopups((prev) => prev.map((p) => (p.id === id ? { ...p, closing: true } : p)));
    setTimeout(() => setPopups((prev) => prev.filter((p) => p.id !== id)), 280);
  }, []);

  const focusPopup = useCallback((id: number) => {
    zCounter.current += 1;
    const z = zCounter.current;
    setPopups((prev) => prev.map((p) => (p.id === id ? { ...p, zIndex: z } : p)));
  }, []);

  return (
    <main
      onClick={handleBgClick}
      style={{
        height: "100dvh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <CustomCursor />

      {BUBBLE_DATA.map((b, i) => (
        <div
          key={i}
          style={{
            position: "fixed",
            left: `${b.left}%`,
            bottom: -b.size,
            width: b.size,
            height: b.size,
            pointerEvents: "none",
            zIndex: 0,
            animation: `bubbleRise ${b.dur}s ${b.delay}s linear infinite`,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "rgba(240, 171, 252, 0.18)",
              border: "1.5px solid rgba(192, 132, 252, 0.35)",
              boxShadow: "inset -3px -3px 6px rgba(255,255,255,0.4), inset 1px 1px 3px rgba(240,171,252,0.15)",
              animation: `bubbleSway ${b.swayDur}s ${b.delay}s ease-in-out infinite alternate`,
            }}
          />
        </div>
      ))}

      <section
        ref={heroRef}
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px 16px 12px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #f0abfc, #c084fc)",
            boxShadow: "0 0 0 4px #fff9fe, 0 0 0 6px #f0abfc80",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
            marginBottom: 12,
            flexShrink: 0,
          }}
        >
          <img src="/icon.jpeg" alt="hanab" style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
        </div>

        <h1
          style={{
            fontFamily: "var(--font-en)",
            fontSize: "clamp(28px, 6vw, 40px)",
            fontWeight: 800,
            color: "#c084fc",
            letterSpacing: "0.06em",
            marginBottom: 6,
            lineHeight: 1.1,
          }}
        >
          hanab
        </h1>

        <p style={{ fontSize: 13, color: "#7c5c8a", marginBottom: 14 }}>
          ✿ note執筆・個人開発をしています ✿
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
          <a href="https://twitter.com/hn_a_b" target="_blank" rel="noopener noreferrer" className="sns-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
            Twitter
          </a>
          <a href="https://github.com/HanabLabs" target="_blank" rel="noopener noreferrer" className="sns-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <a href="https://note.com/hn_a_b" target="_blank" rel="noopener noreferrer" className="sns-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.5 3h-13A2.5 2.5 0 003 5.5v13A2.5 2.5 0 005.5 21h13a2.5 2.5 0 002.5-2.5v-13A2.5 2.5 0 0018.5 3zm-2 5.5H10a.75.75 0 010-1.5h6.5a.75.75 0 010 1.5zm0 4H10a.75.75 0 010-1.5h6.5a.75.75 0 010 1.5zm-4 4H10a.75.75 0 010-1.5h2.5a.75.75 0 010 1.5z" />
            </svg>
            note
          </a>
        </div>
      </section>

      <section
        className="works-sections"
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          minHeight: 0,
        }}
      >
        <CardSection title="Products" items={PRODUCTS} maxVisible={maxVisible} />
        <CardSection title="Note" items={NOTE_ARTICLES} maxVisible={maxVisible} />
      </section>

      <p style={{ position: "relative", zIndex: 2, textAlign: "center", fontSize: 11, color: "#c4a0d4", padding: "0 0 10px", flexShrink: 0 }}>
        © 2026 hanab ✿
      </p>

      {popups.map((popup) => (
        <Popup key={popup.id} popup={popup} onClose={closePopup} onFocus={focusPopup} onDragMove={addSparkle} />
      ))}

      {sparkles.map((s) => (
        <SparkleElement key={s.id} s={s} />
      ))}
    </main>
  );
}
