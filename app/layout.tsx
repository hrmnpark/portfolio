import type { Metadata } from 'next';
import { Manrope, PT_Mono } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const ptMono = PT_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Лика — продуктовый дизайнер',
  description:
    'Портфолио продуктового дизайнера Лики Ефимовой. Мобильные приложения, CRM-системы, маркетплейсы и игровые спецпроекты.',
  openGraph: {
    title: 'Лика — продуктовый дизайнер',
    description:
      'Портфолио продуктового дизайнера Лики Ефимовой. Создаю красивые и удобные интерфейсы.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${manrope.variable} ${ptMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
