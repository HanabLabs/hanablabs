import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    delay: number;
}

export default function ProjectCard({ project, delay }: ProjectCardProps) {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`card project-card fade-in-up delay-${delay}`}
        >
            {project.icon && (
                <div className="project-icon">
                    {project.icon.startsWith('/') ? (
                        <img
                            src={project.icon}
                            alt={`${project.name} icon`}
                            className="project-icon-image"
                        />
                    ) : (
                        project.icon
                    )}
                </div>
            )}
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <span className="project-link">
                View project →
            </span>
        </a>
    );
}
