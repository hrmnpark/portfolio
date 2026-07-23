export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact__glow" aria-hidden />
      <div className="container contact__inner">
        <h2 className="contact__title">Свяжитесь со мной</h2>
        <a className="contact__email" href="mailto:likaefimova2001@mail.ru">
          likaefimova2001@mail.ru
        </a>
        <div className="contact__socials">
          <a
            className="contact__social"
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
          <a
            className="contact__social"
            href="https://vk.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Вконтакте
          </a>
        </div>
      </div>
      <p className="contact__foot">
        © {new Date().getFullYear()} Лика Ефимова · Продуктовый дизайнер
      </p>
    </footer>
  );
}
