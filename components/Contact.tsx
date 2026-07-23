export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact__bg" aria-hidden />
      <div className="contact__inner">
        <h2 className="contact__title">Свяжитесь со мной</h2>
        <div className="contact__pills">
          <a className="contact__pill glass" href="mailto:likaefimova2001@mail.ru">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect x="3" y="5" width="18" height="14" rx="3" stroke="#fff" strokeWidth="1.6" />
              <path d="m4 7 8 5 8-5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            likaefimova2001@mail.ru
          </a>
          <a
            className="contact__pill glass"
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M21.5 4.3 2.9 11.4c-.9.35-.9 1.6.02 1.9l4.6 1.5 1.8 5.4c.28.72 1.16.9 1.7.35l2.5-2.5 4.6 3.4c.6.44 1.46.1 1.62-.62l3.3-15.1c.2-.9-.7-1.65-1.54-1.32Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="m8.1 14.8.35 4.2 2.1-3.3 6.9-8.2-9.35 7.3Z" fill="#fff" />
            </svg>
            Telegram
          </a>
          <a
            className="contact__pill glass"
            href="https://vk.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12.2 17c-5.1 0-8.4-3.6-8.5-9.4h2.6c.1 4.3 2.1 6.1 3.6 6.5V7.6h2.5v3.7c1.5-.16 3-1.9 3.6-3.7h2.4c-.44 2.1-2 3.9-3.1 4.6 1.1.6 2.9 2.1 3.6 4.8h-2.7c-.55-1.8-1.9-3.2-3.8-3.4V17h-.3Z"
                fill="#fff"
              />
            </svg>
            Вконтакте
          </a>
        </div>
      </div>
    </footer>
  );
}
