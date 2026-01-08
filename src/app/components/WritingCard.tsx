import type { Article } from '../types';

interface WritingCardProps {
    article: Article;
    delay: number;
}

export default function WritingCard({ article, delay }: WritingCardProps) {
    return (
        <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`card writing-card fade-in-up delay-${delay}`}
        >
            <h3 className="writing-title">{article.title}</h3>
            {article.description && (
                <p className="writing-description">{article.description}</p>
            )}
            <span className="writing-link">Read essay →</span>
        </a>
    );
}
