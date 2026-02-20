import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import path from "path";

export const runtime = "nodejs";
export const alt = "hanab - hanabの個人サイト";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function fetchJapaneseFont() {
  const text = "hanabの個人サイトnote執筆・個人開発をしています✿";
  const cssUrl = `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&text=${encodeURIComponent(text)}`;
  const css = await fetch(cssUrl, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible)" },
  }).then((r) => r.text());
  const match = css.match(/url\((https:\/\/[^)]+)\)/);
  if (!match) return null;
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const iconData = readFileSync(path.join(process.cwd(), "public/icon.jpeg"));
  const iconSrc = `data:image/jpeg;base64,${iconData.toString("base64")}`;

  const fontData = await fetchJapaneseFont().catch(() => null);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #fdf4ff 0%, #f5d0fe 60%, #e9d5ff 100%)",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          gap: "64px",
          position: "relative",
        }}
      >
        {/* 背景の装飾バブル */}
        <div style={{ position: "absolute", top: 50, right: 100, width: 140, height: 140, borderRadius: "50%", background: "rgba(240,171,252,0.25)", border: "2px solid rgba(192,132,252,0.3)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 70, left: 70, width: 90, height: 90, borderRadius: "50%", background: "rgba(192,132,252,0.2)", border: "2px solid rgba(240,171,252,0.3)", display: "flex" }} />
        <div style={{ position: "absolute", top: 120, left: 120, width: 50, height: 50, borderRadius: "50%", background: "rgba(249,168,212,0.3)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 120, right: 200, width: 70, height: 70, borderRadius: "50%", background: "rgba(240,171,252,0.2)", display: "flex" }} />

        {/* アイコン（丸くくり抜き） */}
        <img
          src={iconSrc}
          width={220}
          height={220}
          style={{
            borderRadius: "50%",
            border: "8px solid #f0abfc",
            boxShadow: "0 0 0 4px #fff9fe, 0 12px 48px rgba(192,132,252,0.45)",
            flexShrink: 0,
          }}
        />

        {/* テキスト */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
            <div
              style={{
                fontSize: 92,
                fontWeight: 700,
                color: "#c084fc",
                fontFamily: "Noto Sans JP, sans-serif",
                letterSpacing: "0.05em",
                lineHeight: 1,
              }}
            >
              hanab
            </div>
            <div
              style={{
                fontSize: 38,
                color: "#7c5c8a",
                fontFamily: "Noto Sans JP, sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              の個人サイト
            </div>
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#c4a0d4",
              fontFamily: "Noto Sans JP, sans-serif",
            }}
          >
            ✿ note執筆・個人開発をしています ✿
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: "Noto Sans JP", data: fontData, weight: 700 as const }]
        : [],
    }
  );
}
