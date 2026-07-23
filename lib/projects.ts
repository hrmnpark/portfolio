export type Project = {
  slug: string;
  title: string;
  tags: string[];
  description: string;
  // visual side of the card
  image: string; // path under /public — user drops the exported mockup here
  imageAlt: string;
  theme: 'light' | 'dark';
  gradient: string; // CSS background for the visual panel
  imageOnLeft: boolean;
  prototype?: boolean; // show the "Смотреть прототип" link
};

export const projects: Project[] = [
  {
    slug: 'finance-kids',
    title: 'Приложение, обучающее детей финансам',
    tags: ['Mobile app', 'Product design', 'UI/UX', 'Game design'],
    description:
      'Приложение, где через интерактивные квесты и мини-игры ребёнок учится обращаться с деньгами и планировать бюджет. Благодаря системе наград у ребёнка появляется мотивация проходить квесты, чтобы зарабатывать монеты — их он тратит на покупку костюмов для своего персонажа, превращая обучение в увлекательную игру.',
    image: '/projects/finance-kids.png',
    imageAlt: 'Мокапы мобильного приложения по финансовой грамотности для детей',
    theme: 'light',
    gradient:
      'radial-gradient(120% 120% at 20% 0%, #EFE7FF 0%, #E7ECFF 45%, #F4ECFF 100%)',
    imageOnLeft: true,
    prototype: true,
  },
  {
    slug: 'restaurant-crm',
    title: 'CRM-система для ресторанов',
    tags: ['Desktop', 'Product design', 'UI/UX'],
    description:
      'CRM-система для ресторанов, которая помогает эффективно управлять бронированиями, отслеживать загруженность зала и анализировать выручку. Система синхронизирована с приложением для гостей — новые брони автоматически появляются в CRM в режиме реального времени.',
    image: '/projects/restaurant-crm.png',
    imageAlt: 'Мокап десктопной CRM-системы для ресторанов на планшете',
    theme: 'dark',
    gradient:
      'radial-gradient(120% 120% at 80% 0%, #2A1B4A 0%, #1E1140 55%, #140B2E 100%)',
    imageOnLeft: false,
    prototype: true,
  },
  {
    slug: 'table-booking',
    title: 'Приложение для бронирования столиков',
    tags: ['Mobile app', 'UI/UX'],
    description:
      'Мобильное приложение для бронирования столиков в ресторанах, которое помогает пользователям легко находить подходящие заведения с учётом предпочтений по времени и локации.',
    image: '/projects/table-booking.png',
    imageAlt: 'Мокап мобильного приложения для бронирования столиков',
    theme: 'light',
    gradient:
      'radial-gradient(120% 120% at 20% 0%, #E9F6FF 0%, #E7ECFF 55%, #F0F4FF 100%)',
    imageOnLeft: true,
    prototype: true,
  },
  {
    slug: 'marketplace',
    title: 'Маркетплейс изделий ручной работы',
    tags: ['Web', 'Mobile app', 'UI/UX'],
    description:
      'Lysende — это маркетплейс, объединяющий талантливых мастеров и предпринимателей малого бизнеса. Платформа предоставляет пространство для удобной покупки и продажи эксклюзивных товаров, созданных исключительно на внутреннем рынке, с интеграцией функционала социальных сетей.',
    image: '/projects/marketplace.png',
    imageAlt: 'Мокап маркетплейса изделий ручной работы на ноутбуке и телефоне',
    theme: 'light',
    gradient:
      'radial-gradient(120% 120% at 80% 0%, #FFF3E6 0%, #FFECEF 55%, #FDF3FF 100%)',
    imageOnLeft: false,
    prototype: true,
  },
  {
    slug: 'seller-dashboard',
    title: 'Личный кабинет для бизнеса',
    tags: ['Web', 'Product design', 'UI/UX'],
    description:
      'Сайт, созданный для продавцов, которые продают свои изделия на маркетплейсе «Lysende». С помощью личного кабинета бренд может не только заполнять карточки товаров и просматривать аналитику по продажам, но и взаимодействовать с покупателями, отвечая на вопросы об изделиях и выкладывая посты и сторис.',
    image: '/projects/seller-dashboard.png',
    imageAlt: 'Мокап личного кабинета продавца на ноутбуке',
    theme: 'light',
    gradient:
      'radial-gradient(120% 120% at 20% 0%, #EEF1FF 0%, #E7ECFF 55%, #F6ECFF 100%)',
    imageOnLeft: true,
    prototype: true,
  },
  {
    slug: 'alfa-forest',
    title: 'Игровой спецпроект «Альфа-лес»',
    tags: ['Web', 'Game design', 'UI/UX'],
    description:
      'Мобильная онлайн-игра для студентов, цель которой — привлечь внимание молодых специалистов. В ходе игры пользователь узнаёт о преимуществах работы в Альфа-Банке, корпоративной культуре и о ценностях компании.',
    image: '/projects/alfa-forest.png',
    imageAlt: 'Мокап игрового спецпроекта «Альфа-лес»',
    theme: 'dark',
    gradient:
      'radial-gradient(120% 120% at 80% 0%, #123A2A 0%, #0E2A22 55%, #0A1F1C 100%)',
    imageOnLeft: false,
    prototype: true,
  },
  {
    slug: 'it-core',
    title: 'Игровой спецпроект «IT Core»',
    tags: ['Web', 'Game design', 'UI/UX'],
    description:
      'Браузерная мини-игра, где через взаимодействие с персонажем игрок знакомится с компанией «Росатом» и узнаёт о конференции «IT Core».',
    image: '/projects/it-core.png',
    imageAlt: 'Мокап игрового спецпроекта «IT Core»',
    theme: 'light',
    gradient:
      'radial-gradient(120% 120% at 20% 0%, #FFE9F4 0%, #FDE7FF 55%, #F0ECFF 100%)',
    imageOnLeft: true,
    prototype: true,
  },
  {
    slug: 'space-arkanoid',
    title: 'Браузерная игра «Space arkanoid»',
    tags: ['Web', 'Game design'],
    description:
      'Атмосферная игра в жанре арканоид, в ходе которой пользователь узнаёт интересные факты о планетах.',
    image: '/projects/space-arkanoid.png',
    imageAlt: 'Мокап браузерной игры «Space arkanoid»',
    theme: 'dark',
    gradient:
      'radial-gradient(120% 120% at 80% 0%, #101A3E 0%, #0B1230 55%, #070A22 100%)',
    imageOnLeft: false,
    prototype: true,
  },
];
