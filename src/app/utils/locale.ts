import type { Language } from '../types';

/**
 * ブラウザのロケールを検出して、デフォルト言語を返す
 */
export function detectLocale(): Language {
    // サーバーサイドの場合
    if (typeof window === 'undefined') {
        return 'ja';
    }

    // localStorageから取得を試みる
    const saved = localStorage.getItem('language');
    if (saved === 'ja' || saved === 'en') {
        return saved;
    }

    // ブラウザの言語設定から判定
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('ja')) {
        return 'ja';
    }

    // デフォルトは日本語
    return 'ja';
}

/**
 * 言語設定を保存
 */
export function saveLocale(lang: Language): void {
    if (typeof window !== 'undefined') {
        localStorage.setItem('language', lang);
    }
}
