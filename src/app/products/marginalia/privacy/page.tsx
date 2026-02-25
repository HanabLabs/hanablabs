import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Marginalia",
  description: "Chrome拡張機能 Marginalia のプライバシーポリシー",
};

export default function MarginaliaPrivacyPage() {
  return (
    <main style={{
      maxWidth: 680,
      margin: "0 auto",
      padding: "60px 24px",
      fontFamily: "var(--font-zen-maru), sans-serif",
      color: "#1a1a1a",
      lineHeight: 1.8,
    }}>
      <p style={{ fontSize: 13, color: "#888", marginBottom: 8 }}>Marginalia</p>
      <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 32 }}>
        プライバシーポリシー
      </h1>

      <Section title="基本方針">
        <p>
          Marginalia（以下「本拡張機能」）は、ユーザーのプライバシーを尊重します。
          本ポリシーでは、本拡張機能が取り扱うデータについて説明します。
        </p>
      </Section>

      <Section title="収集・保存するデータ">
        <p>本拡張機能は以下のデータをブラウザのローカルストレージ（<code>chrome.storage.local</code>）に保存します。</p>
        <ul>
          <li>ユーザーが検索した単語と、取得した説明文（辞書機能）</li>
          <li>選択中のテーマ設定（mono / dusk）</li>
          <li>サイドパネルの開閉状態</li>
        </ul>
        <p>
          これらのデータは端末内にのみ保存され、開発者を含む第三者のサーバーには送信されません。
        </p>
      </Section>

      <Section title="外部サービスへの通信">
        <p>
          単語を検索する際、以下の外部APIにリクエストを送信します。
          送信されるのはユーザーが選択したテキストのみです。
        </p>
        <ul>
          <li>
            <strong>Wikipedia API</strong>（<code>ja.wikipedia.org</code> / <code>en.wikipedia.org</code>）<br />
            単語の説明文を取得するために使用します。
          </li>
          <li>
            <strong>MyMemory 翻訳API</strong>（<code>api.mymemory.translated.net</code>）<br />
            英語の説明文を日本語に翻訳するために使用します。
          </li>
        </ul>
        <p>
          各サービスのプライバシーポリシーについては、それぞれの提供元をご確認ください。
        </p>
      </Section>

      <Section title="第三者への提供">
        <p>
          本拡張機能は、ユーザーデータを収集・販売・第三者と共有することはありません。
        </p>
      </Section>

      <Section title="お問い合わせ">
        <p>
          本ポリシーに関するご質問は、開発者（hanab）までお問い合わせください。
        </p>
      </Section>

      <p style={{ marginTop: 48, fontSize: 13, color: "#888" }}>
        最終更新：2026年2月25日
      </p>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 36 }}>
      <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, paddingBottom: 6, borderBottom: "1px solid #e0e0e0" }}>
        {title}
      </h2>
      <div style={{ fontSize: 14, color: "#333" }}>{children}</div>
    </section>
  );
}
