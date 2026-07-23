# Мокапы проектов

Сюда нужно положить экспортированные из Figma изображения мокапов (PNG).
Имена файлов должны совпадать с путями в `lib/projects.ts`:

- finance-kids.png       — Приложение, обучающее детей финансам
- restaurant-crm.png     — CRM-система для ресторанов
- table-booking.png      — Приложение для бронирования столиков
- marketplace.png        — Маркетплейс изделий ручной работы
- seller-dashboard.png   — Личный кабинет для бизнеса
- alfa-forest.png        — Игровой спецпроект «Альфа-лес»
- it-core.png            — Игровой спецпроект «IT Core»
- space-arkanoid.png     — Браузерная игра «Space arkanoid»

Аватар для hero (по желанию): положи `public/avatar.png` и раскомментируй <img> в `components/Hero.tsx`.

## Как включить картинку вместо плейсхолдера
В `components/ProjectCard.tsx` раскомментируй строку с `<img className="card__media" ... />`
и удали блок `<div className="card__placeholder">`.
