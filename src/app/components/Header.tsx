import type { Language } from '../types';

interface HeaderProps {
    language: Language;
    onLanguageChange: (lang: Language) => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">hanab labs</div>
                <div className="lang-toggle">
                    <button
                        className={`lang-button ${language === 'ja' ? 'active' : ''}`}
                        onClick={() => onLanguageChange('ja')}
                    >
                        日本語
                    </button>
                    <button
                        className={`lang-button ${language === 'en' ? 'active' : ''}`}
                        onClick={() => onLanguageChange('en')}
                    >
                        English
                    </button>
                </div>
            </div>
        </header>
    );
}
