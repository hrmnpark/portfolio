# Портфолио — Лика Ефимова (продуктовый дизайнер)

Сайт-портфолио по макету из Figma. Собран на **Next.js** со статическим экспортом
(`output: 'export'`) — деплоится на **Cloudflare Pages** напрямую из гита.

## Стек
- Next.js 14 (App Router, static export → папка `out/`)
- Шрифты: Manrope (заголовки) + PT Mono (текст) через `next/font/google`
- Без бэкенда — чистая статика

## Локальный запуск
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # статический экспорт в out/
```

## Деплой на Cloudflare Pages
1. Подключи этот репозиторий в Cloudflare Pages (Workers & Pages → Create → Pages → Connect to Git).
2. Настройки сборки:
   - **Framework preset**: `Next.js (Static HTML Export)` (или None)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Environment variable**: `NODE_VERSION = 20` (или выше)
3. Deploy. Каждый push в ветку будет пересобирать сайт автоматически.

## Мокапы проектов (важно)
Из-за политики доступа изображения из Figma не были выгружены автоматически —
вместо них показаны аккуратные плейсхолдеры. Чтобы подставить реальные картинки:

1. Экспортируй мокапы из Figma в PNG.
2. Положи их в `public/projects/` с именами из `lib/projects.ts`
   (`finance-kids.png`, `restaurant-crm.png`, `table-booking.png`, `marketplace.png`,
   `seller-dashboard.png`, `alfa-forest.png`, `it-core.png`, `space-arkanoid.png`).
3. В `components/ProjectCard.tsx` раскомментируй `<img className="card__media" … />`
   и удали блок `<div className="card__placeholder">`.
4. Аватар в hero: положи `public/avatar.png` и подставь `<img>` в `components/Hero.tsx`.

Подробности — в `public/projects/README.md`.

## Структура
```
app/
  layout.tsx      # шрифты, метаданные
  page.tsx        # сборка страницы
  globals.css     # все стили
components/
  Hero.tsx        # первый экран + навигация
  ProjectCard.tsx # карточка проекта
  Contact.tsx     # секция контактов (футер)
lib/
  projects.ts     # контент всех проектов
public/projects/  # сюда кладутся экспортированные мокапы
```

## Заметки по соответствию макету
- Кастомный шрифт заголовков **RockStar** заменён на **Manrope 800** (RockStar —
  платный, недоступен в вебе). Моно-шрифт текста — **PT Mono** как в макете.
- Фон hero и градиенты карточек воссозданы средствами CSS по цветам из макета.
