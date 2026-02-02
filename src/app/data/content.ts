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
            title: 'プロジェクト一覧',
            items: [
                {
                    name: 'TypeScript Naming Convention Checker',
                    description: 'TypeScriptの命名規則をチェックする拡張機能',
                    icon: '/ts-naming-icon.png',
                    link: 'https://marketplace.visualstudio.com/items?itemName=hanablabs001.naming-convention-checker',
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
                {
                    title: '大規模開発におけるデータベース設計の重要性',
                    description: '大規模開発におけるデータベース設計の重要性について解説しています。',
                    link: 'https://note.com/hanablabs/n/n5ed32b3c7d87?sub_rt=share_sb',
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
                {
                    label: 'GitHub',
                    handle: 'HanabLabs',
                    link: 'https://github.com/HanabLabs',
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
                    name: 'TypeScript Naming Convention Checker',
                    description: 'Enforces naming conventions for constants and functions in TypeScript files using AST analysis.',
                    icon: '/ts-naming-icon.png',
                    link: 'https://marketplace.visualstudio.com/items?itemName=hanablabs001.naming-convention-checker',
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
                {
                    title: '大規模開発におけるデータベース設計の重要性',
                    description: '大規模開発におけるデータベース設計の重要性について解説しています。',
                    link: 'https://note.com/hanablabs/n/n5ed32b3c7d87?sub_rt=share_sb',
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
                {
                    label: 'GitHub',
                    handle: 'HanabLabs',
                    link: 'https://github.com/HanabLabs',
                },
            ],
        },
    },
};
