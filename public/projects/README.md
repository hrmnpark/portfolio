# Мокапы проектов

Реальные мокапы, экспортированные из Figma (файл `VvV9eahreQ33LEe3nV9cPW`, нода `601:9`).
Имена файлов совпадают с путями `image` в `lib/projects.ts` и подставляются в карточки
через `<img className="card__media">` в `components/ProjectCard.tsx`.

- finance-kids.png       — Приложение, обучающее детей финансам
- restaurant-crm.png     — CRM-система для ресторанов
- table-booking.png      — Приложение для бронирования столиков
- marketplace.png        — Маркетплейс изделий ручной работы
- seller-dashboard.png   — Личный кабинет для бизнеса
- alfa-forest.png        — Игровой спецпроект «Альфа-лес»
- it-core.png            — Игровой спецпроект «IT Core»
- space-arkanoid.png     — Браузерная игра «Space arkanoid»

Аватар для hero (по желанию): положи `public/avatar.png` и раскомментируй <img> в `components/Hero.tsx`.

## Как обновить мокап
Перезалей экспорт из Figma в файл с тем же именем — карточка подхватит его автоматически.
