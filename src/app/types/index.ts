// 言語の型定義
export type Language = 'ja' | 'en';

// プロジェクトの型定義
export interface Project {
  name: string;
  description: string;
  icon?: string;
  link: string;
}

// 記事の型定義
export interface Article {
  title: string;
  description?: string;
  link: string;
}

// 外部サービスの型定義
export interface Service {
  name: string;
  description: string;
  link: string;
}

// コンテンツの型定義
export interface Content {
  header: {
    languageToggle: {
      ja: string;
      en: string;
    };
  };
  projects: {
    title: string;
    items: Project[];
  };
  writing: {
    title: string;
    items: Article[];
  };
  services: {
    title: string;
    items: Service[];
  };
  contact: {
    title: string;
    message: string;
    email: string;
  };
  footer: {
    sns: {
      label: string;
      handle: string;
      link: string;
    }[];
  };
}
