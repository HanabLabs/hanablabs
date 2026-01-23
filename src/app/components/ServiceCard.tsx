import type { Service } from '../types';

interface ServiceCardProps {
    service: Service;
    delay: number;
}

export default function ServiceCard({ service, delay }: ServiceCardProps) {
    return (
        <a
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`card service-card fade-in-up delay-${delay}`}
        >
            <h3 className="service-name">{service.name}</h3>
            <p className="service-description">{service.description}</p>
            <span className="service-link">View service →</span>
        </a>
    );
}
