# Дина Матвеева — психолог

Персональный сайт психолога. Стек: Astro + CSS, статическая генерация.

## Архитектура

- **GitHub** — исходный код и история изменений.
- **Astro** — сборка статического сайта.
- **Cloudflare Pages** — целевой хостинг и автоматическая публикация.
- **Публичные материалы** — каталог `assets/`, настроенный как Astro public directory.

## Локальная разработка

Требуется актуальная LTS-версия Node.js.

```bash
npm install
npm run dev
```

## Проверка и сборка

```bash
npm run check
npm run build
npm run preview
```

Результат сборки находится в `dist/`.

## Cloudflare Pages

Подключите репозиторий `barievroman2/dina-matveeva-psychologist` к Cloudflare Pages.

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Framework preset: Astro (если доступен)
- Node.js: используйте поддерживаемую Cloudflare версию, соответствующую lock-файлу.

После подключения GitHub Cloudflare Pages будет собирать и публиковать изменения из основной ветки автоматически.

Официальное руководство: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/

## Содержимое

- `src/pages/index.astro` — главная страница.
- `styles.css` — существующая система стилей, импортируемая Astro.
- `assets/dina-matveeva-portrait.jpg` — портрет.
- `assets/favicon.svg` — favicon.
- `assets/certificates/` — место для реальных подтверждающих документов.
- `assets/products/` и `data/products.json` — заготовки будущего цифрового продукта.

## Перед публичным продвижением

1. Согласовать тексты с Диной.
2. Проверить названия программ и документы об образовании.
3. Убедиться, что фотография является актуальным профессиональным портретом.
4. Подготовить и проверить PDF перед продажей. Сейчас продукт не продаётся, а оплата не подключена.
5. Проверить актуальность юридических текстов и соответствие фактическим процессам обработки данных.
6. После получения реального адреса Cloudflare Pages сверить canonical URL, sitemap и доменные настройки.

GitHub Pages не используется для публикации этого проекта.
