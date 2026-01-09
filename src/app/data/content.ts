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
        hero: {
            tagline: '生きた証を、プロダクトにする。',
        },
        projects: {
            title: 'Projects',
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
            ],
        },
        writing: {
            title: 'Writing',
            items: [
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
                {
                    title: 'AIに命令しないためのプロンプト設計',
                    description: '『ECHO』プロンプト編',
                    link: 'https://note.com/hanablabs/n/n950aef3ac560?sub_rt=share_sb',
                },
            ],
        },
        contact: {
            title: 'Contact',
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
        hero: {
            tagline: 'Turning life into products.',
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
            ],
        },
        writing: {
            title: 'Writing',
            items: [
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
                {
                    title: 'AIに命令しないためのプロンプト設計',
                    description: '『ECHO』プロンプト編',
                    link: 'https://note.com/hanablabs/n/n950aef3ac560?sub_rt=share_sb',
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
