import type { Project } from '@/lib/projects';
import DeviceMock from './DeviceMock';

export default function ProjectCard({ project }: { project: Project }) {
  const {
    title,
    tags,
    description,
    gradient,
    theme,
    imageOnLeft,
    imageAlt,
    device,
    screen,
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
      <div className="card__panel" style={{ background: gradient }}>
        <span className="card__blob card__blob--1" aria-hidden />
        <span className="card__blob card__blob--2" aria-hidden />
        {/* Экспортированный мокап кладётся в public по пути project.image.
            Пока файла нет — показываем CSS-мокап устройства.
            Чтобы включить реальную картинку — раскомментируй <img> ниже
            и удали <DeviceMock />. */}
        <DeviceMock device={device} screen={screen} label={imageAlt} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img className="card__media" src={image} alt={imageAlt} /> */}
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
