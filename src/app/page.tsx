'use client';

import { useState, useEffect } from 'react';
import type { Language } from './types';
import { detectLocale, saveLocale } from './utils/locale';
import { content } from './data/content';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import WritingCard from './components/WritingCard';

export default function Home() {
  const [language, setLanguage] = useState<Language>('ja');
  const [mounted, setMounted] = useState(false);

  // クライアントサイドでマウント後に言語を設定
  useEffect(() => {
    setLanguage(detectLocale());
    setMounted(true);
  }, []);

  // 言語変更ハンドラー
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    saveLocale(lang);
    // body要素のlang属性を更新（フォント切り替え用）
    document.body.setAttribute('lang', lang);
  };

  // マウント前はローディングまたは何も表示しない
  if (!mounted) {
    return null;
  }

  const currentContent = content[language];

  return (
    <>
      <Header language={language} onLanguageChange={handleLanguageChange} />

      <main>
        {/* プロジェクトセクション */}
        <section className="section">
          <div className="container">
            <h2 className="section-title fade-in-up delay-1">
              {currentContent.projects.title}
            </h2>
            <div className="projects-grid">
              {currentContent.projects.items.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  delay={(index % 6) + 2}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 記事セクション */}
        <section className="section">
          <div className="container">
            <h2 className="section-title fade-in-up delay-1">
              {currentContent.writing.title}
            </h2>
            <div className="writing-list">
              {currentContent.writing.items.map((article, index) => (
                <WritingCard
                  key={index}
                  article={article}
                  delay={(index % 6) + 2}
                />
              ))}
            </div>
          </div>
        </section>

        {/* コンタクトセクション */}
        <section className="section">
          <div className="container">
            <h2 className="section-title fade-in-up delay-1">
              {currentContent.contact.title}
            </h2>
            <div className="contact-content fade-in-up delay-2">
              <p className="contact-message">
                {currentContent.contact.message}
              </p>
              <a
                href={`mailto:${currentContent.contact.email}`}
                className="contact-email"
              >
                {currentContent.contact.email}
              </a>
            </div>
          </div>
        </section>

        {/* フッター */}
        <footer className="footer">
          <div className="container">
            <div className="footer-sns fade-in-up delay-1">
              {currentContent.footer.sns.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sns-link"
                >
                  {social.label} {social.handle}
                </a>
              ))}
            </div>
            <p className="footer-copy fade-in-up delay-2">
              © 2026 hanab labs
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
