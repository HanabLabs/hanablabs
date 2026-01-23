import type { Content, Language } from '../types';

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
        projects: {
            title: 'プロダクト一覧',
            items: [
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
                {
                    name: 'FocusDock',
                    description: '日々の積み重ねを、自信に変える',
                    icon: '/focusdock.png',
                    link: 'https://focusdock.hanablabs.com',
                },
            ],
        },
        writing: {
            title: '記事一覧',
            items: [
                {
                    title: 'ブロックチェーンを支える「電子署名」の仕組みを徹底解説',
                    description: '電子署名の仕組みをわかりやすく解説しています。',
                    link: 'https://note.com/hanablabs/n/n3427abf16500?sub_rt=share_sb',
                },
            ],
        },
        services: {
            title: 'サービス一覧',
            items: [
                {
                    name: '要件・仕様整理のお手伝い',
                    description: 'あなたのビジネスに必要な要件や仕様を整理します。',
                    link: 'https://coconala.com/services/4034984',
                },
            ],
        },
        contact: {
            title: 'お問い合わせ',
            message: '何かありましたら、お気軽にご連絡ください。',
            email: 'hanab.labs@gmail.com',
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
        projects: {
            title: 'Projects',
            items: [
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
                {
                    name: 'FocusDock',
                    description: 'Building confidence, one day at a time',
                    icon: '/focusdock.png',
                    link: 'https://focusdock.hanablabs.com',
                },
            ],
        },
        writing: {
            title: 'Writing',
            items: [
                {
                    title: 'ブロックチェーンを支える「電子署名」の仕組みを徹底解説',
                    description: '電子署名の仕組みをわかりやすく解説しています。',
                    link: 'https://note.com/hanablabs/n/n3427abf16500?sub_rt=share_sb',
                },
            ],
        },
        services: {
            title: 'Services',
            items: [
                {
                    name: 'Requirement & Specification Assistance',
                    description: 'Help your business requirements and specifications.',
                    link: 'https://coconala.com/services/4034984',
                },
            ],
        },
        contact: {
            title: 'Contact',
            message: 'Feel free to reach out anytime.',
            email: 'hanab.labs@gmail.com',
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
