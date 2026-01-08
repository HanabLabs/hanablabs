import type { Content, Language } from '../types';

/**
 * ========================================
 * コンテンツ編集ガイド
 * ========================================
 * 
 * このファイルでサイトのすべてのコンテンツを管理しています。
 * 
 * 1. プロジェクトを追加する場合：
 *    projects → items の配列に、以下の形式で追加してください
 *    {
 *      name: 'プロジェクト名',
 *      description: '説明文',
 *      icon: '🎨', // 絵文字またはアイコン（オプション）
 *      link: 'https://example.com' // リンク先URL
 *    },
 * 
 * 2. 記事を追加する場合：
 *    writing → items の配列に、以下の形式で追加してください
 *    {
 *      title: '記事タイトル',
 *      description: '短い説明（オプション）',
 *      link: 'https://note.com/...' // 記事のURL
 *    },
 * 
 * 3. 日本語・英語の両方を編集してください
 *    jaとenの両方のセクションがあります
 * 
 * 4. カンマを忘れないように！
 *    各項目の最後には , (カンマ) が必要です
 * 
 * ========================================
 */

export const content: Record<Language, Content> = {
    // ========================================
    // 日本語コンテンツ
    // ========================================
    ja: {
        header: {
            languageToggle: {
                ja: '日本語',
                en: 'English',
            },
        },
        hero: {
            tagline: '生きた証を、プロダクトにする。',
        },
        projects: {
            title: 'Projects',
            items: [
                // ここにプロジェクトを追加してください
                {
                    name: 'ECHO',
                    description: '人格が成長するAIとのX運用アプリ',
                    icon: '/ECHO.png',
                    link: 'https://echo.hanablabs.com',
                },
                {
                    name: 'Quietly',
                    description: '毎日ひとつ、ほんの少しだけよくする',
                    icon: '/Quietly.png',
                    link: 'https://quietly.hanablabs.com',
                },
            ],
        },
        writing: {
            title: 'Writing',
            items: [
                // ここに記事を追加してください
                {
                    title: '気持ちをうまく言えない人のための、ECHOという試み',
                    description: '『ECHO』着想編',
                    link: 'https://note.com/hanablabs/n/na443ce81fe66?sub_rt=share_sb',
                },
                {
                    title: '最適化しないAIを作るための人格設計',
                    description: '『ECHO』設計編',
                    link: 'https://note.com/hanablabs/n/n81a78a7fcfd3?sub_rt=share_sb',
                },
            ],
        },
        contact: {
            title: 'Contact',
            message: '何かありましたら、お気軽にご連絡ください。',
            email: 'habab@hanablabs.com',
        },
        footer: {
            sns: [
                {
                    label: 'X (Twitter)',
                    handle: '@hn_a_b',
                    link: 'https://x.com/hn_a_b',
                },
            ],
        },
    },

    // ========================================
    // 英語コンテンツ
    // ========================================
    en: {
        header: {
            languageToggle: {
                ja: '日本語',
                en: 'English',
            },
        },
        hero: {
            tagline: 'Turning life into products.',
        },
        projects: {
            title: 'Projects',
            items: [
                // Add your projects here
                {
                    name: 'ECHO',
                    description: 'AI-powered Twitter management with evolving personality',
                    icon: '/ECHO.png',
                    link: 'https://echo.hanablabs.com',
                },
                {
                    name: 'Quietly',
                    description: 'Do one small thing a little better today',
                    icon: '/Quietly.png',
                    link: 'https://quietly.hanablabs.com',
                },
            ],
        },
        writing: {
            title: 'Writing',
            items: [
                // Add your articles here
                {
                    title: '気持ちをうまく言えない人のための、ECHOという試み',
                    description: '『ECHO』着想編',
                    link: 'https://note.com/hanablabs/n/na443ce81fe66?sub_rt=share_sb',
                },
                {
                    title: '最適化しないAIを作るための人格設計',
                    description: '『ECHO』設計編',
                    link: 'https://note.com/hanablabs/n/n81a78a7fcfd3?sub_rt=share_sb',
                },
            ],
        },
        contact: {
            title: 'Contact',
            message: 'Feel free to reach out anytime.',
            email: 'habab@hanablabs.com',
        },
        footer: {
            sns: [
                {
                    label: 'X (Twitter)',
                    handle: '@hn_a_b',
                    link: 'https://x.com/hn_a_b',
                },
            ],
        },
    },
};
