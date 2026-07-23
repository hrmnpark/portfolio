export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__bg" aria-hidden />
      <div className="container">
        <nav className="nav">
          <a className="nav__logo" href="#top" aria-label="В начало">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 21s-7.5-4.35-9.9-9.03C.7 9.2 1.7 5.9 4.6 5.1c1.9-.5 3.8.3 4.9 1.9L12 10l2.5-3c1.1-1.6 3-2.4 4.9-1.9 2.9.8 3.9 4.1 2.5 6.87C19.5 16.65 12 21 12 21z"
                fill="#fff"
              />
            </svg>
          </a>
          <div className="nav__links">
            <a className="nav__link" href="#projects">Проекты</a>
            <a className="nav__link" href="#projects">Резюме</a>
            <a className="nav__link" href="#contact">Контакты</a>
          </div>
        </nav>

        <div className="hero__body">
          <h1 className="hero__title">Product designer</h1>
          <div className="hero__intro">
            <span className="hero__avatar" aria-hidden>Л</span>
            <p>
              Привет! Я Лика — продуктовый дизайнер. Имею опыт работы как со
              стартапами, так и с крупными брендами. Создаю красивые и удобные
              интерфейсы. Давайте творить вместе!
            </p>
          </div>
        </div>

        <a className="scroll-hint" href="#projects" aria-label="Листать вниз">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </header>
  );
}
