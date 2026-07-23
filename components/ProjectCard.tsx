import type { Project } from '@/lib/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const {
    title,
    tags,
    description,
    gradient,
    theme,
    imageOnLeft,
    image,
    imageAlt,
    prototype,
  } = project;

  return (
    <article
      className={[
        'card',
        theme === 'dark' ? 'card--dark' : 'card--light',
        imageOnLeft ? 'card--media-left' : 'card--media-right',
      ].join(' ')}
    >
      <div className="card__panel card__panel--media" style={{ background: gradient }}>
        {/* Реальный мокап, экспортированный из Figma в public/projects/. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="card__media" src={image} alt={imageAlt} loading="lazy" />
      </div>

      <div className="card__text">
        <div className="card__tags">
          {tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <h2 className="card__title">{title}</h2>
        <p className="card__desc">{description}</p>
        <div className="card__actions">
          <button className="btn" type="button">
            Подробнее
          </button>
          {prototype && (
            <button className="btn btn--ghost" type="button">
              Смотреть прототип
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
