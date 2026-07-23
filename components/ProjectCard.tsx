import type { Project } from '@/lib/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const { title, tags, description, gradient, imageOnLeft, image, imageAlt, prototype } =
    project;

  return (
    <article
      className={['card', imageOnLeft ? 'card--media-left' : 'card--media-right'].join(' ')}
    >
      <div className="card__panel" style={{ '--panel-bg': gradient } as React.CSSProperties}>
        {/* Реальный мокап, экспортированный из Figma в public/projects/. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="card__media" src={image} alt={imageAlt} loading="lazy" />
      </div>

      <div className="card__text">
        <div className="card__head">
          <h2 className="card__title">{title}</h2>
          <div className="card__tags">
            {tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <p className="card__desc">{description}</p>
        </div>
        <div className="card__actions">
          <button className="btn btn--dark" type="button">
            Подробнее
          </button>
          {prototype && (
            <button className="btn btn--proto" type="button">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden>
                <path d="M15 8.13a1 1 0 0 1 0 1.74l-13 7.26A1 1 0 0 1 .5 16.26V1.74A1 1 0 0 1 2 .87l13 7.26Z" fill="#fff" />
              </svg>
              Смотреть прототип
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
