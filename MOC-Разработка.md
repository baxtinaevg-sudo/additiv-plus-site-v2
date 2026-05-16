---
type: moc
section: разработка
created: 2026-05-13
---
# 💻 MOC — Разработка

> [[00-Главная|← Главная]]

---

## Сайт (additiv-plus-site)

Корпоративный сайт Аддитив Плюс на **Vue 3 + Vite + Tailwind CSS**.

### Структура компонентов

| Компонент | Описание |
|---|---|
| AppNav / NavBar | Навигация |
| HeroSection | Главная секция |
| AboutSection | О компании |
| ProductsSection | Продукция |
| LabSection | Лаборатория |
| StatsSection | Статистика |
| FaqSection | Вопросы-ответы |
| CtaSection | Призыв к действию |
| MarqueeSection | Бегущая строка |
| VideoSection | Видео |
| MoleculeCanvas / MoleculeScene | 3D-молекула |
| Preloader | Загрузчик |
| CustomCursor | Кастомный курсор |
| AppFooter / FooterSection | Подвал |

### Технологии

- **Vue 3** (Composition API)
- **Vite** (сборка)
- **Tailwind CSS** (стили)
- **Lenis** (плавный скролл)

### Запуск

```bash
cd additiv-plus-site && pnpm dev
```

---

## HTML-материалы

| Файл | Описание | Расположение |
|---|---|---|
| brochure_*.html | Брошюры (v1-v4, pdf, preview, resume) | корень |
| site-preview.html | Превью сайта | корень |
| bestresearch.html | Исследование | корень |
| presentation.html | Презентация | `хим.элемент/` |
| additivplus_main.html | Главная Аддитив Плюс | `хим.элемент/` |
| afaya_main.html | Главная Афива | `хим.элемент/` |
| baltimix_main.html | Главная Балтимикс | `хим.элемент/` |
| preview.html (v1-v3) | Каталог ССС HTML | `.business/marketing/catalog-sss/` |
| 03-матрица-preview.html | Матрица конкурентов HTML | `рынок/` |

---

## Скрипты

| Скрипт | Описание |
|---|---|
| fetch_competitors.js | Загрузка данных конкурентов |
| fetch_finance.js | Загрузка финансовых данных |
| fetch_revenue.js | Загрузка выручки |
| fetch_years.js | Загрузка данных по годам |
| search_papers.js | Поиск научных статей |
| build_pdf.js | Генерация PDF |
| _build_catalog_pdf.js | Сборка каталога PDF |
| _build_all_pdf.js | Сборка всех PDF |
| _generate_versions.js | Генерация версий |
| extract_color.js / _extract_color.js | Извлечение цветов |
| _replace_color.js | Замена цветов |
| check_checko.js | Проверка ЧИПиДип |
| decode_page.js / decode_page.py | Декодирование страниц |
| test_api.js | Тестирование API |

---

## 🔗 Связанные разделы

- [[MOC-Маркетинг]] — структура лендинга
- [[MOC-Проекты]] — планы разработки