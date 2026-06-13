# Repository Guidelines

## Project Structure & Module Organization

This is a static portfolio site built with vanilla HTML, CSS, and JavaScript. The main entry point is `index.html`, with shared main-page styling in `index.css` and interactivity in `index.js`. Project detail pages live in `projects/`; they share `projects/projects_styles.css` and `projects/projects_index.js`. Image assets are stored under `pictures/`, usually grouped by project name, and resume PDFs are in `resume/`. `goals/index.html` is a standalone page separate from the main portfolio flow.

## Build, Test, and Development Commands

There is no package manager, build step, or test runner. Edit files directly and verify in a browser.

- `open index.html` opens the main page locally on macOS.
- `python3 -m http.server 8000` serves the repository at `http://localhost:8000`; use this when checking relative paths and linked pages.
- `rg "text" .` searches source files quickly.

Before finishing changes, click through `index.html`, project pages, the mobile menu, carousel controls, theme toggle, contact form layout, and responsive breakpoints.

## Coding Style & Naming Conventions

Use two-space indentation in HTML, CSS, and JavaScript to match the existing style. Keep JavaScript plain and dependency-free. Prefer descriptive IDs/classes that reflect the UI section or behavior, such as `mobile-menu`, `menu-navbar`, or `data-carousel-button`. Keep project page filenames lowercase or established title case only when already present, for example `projects/outreachgenius.html` and `projects/Manage.html`.

In CSS, reuse the existing custom properties on `:root` for theme colors instead of hard-coding new palettes. Keep responsive updates near the existing breakpoint rules.

## Testing Guidelines

No automated tests are configured. Treat visual and interaction checks as required manual testing. Verify desktop and mobile widths, especially below `800px`, because the mobile navigation and layout change there. When adding a project, confirm image paths, carousel behavior, outbound links, and project card links from the home page.

## Commit & Pull Request Guidelines

Recent commits use short, descriptive messages such as `Updated OutreachGenius pictures`, `New Project`, and `Resolved bug when it came to screen dimensions`. Follow that style: summarize the visible change in one sentence, using sentence case or concise title case.

Pull requests should include a short description, changed pages/assets, manual test notes, and screenshots for visual changes. Link any related issue when applicable.

## Security & Configuration Tips

Do not commit secrets or private analytics changes. External services currently include FormSubmit.co, AOS from unpkg, FontAwesome, and Google Analytics; verify those scripts/forms still load after edits.
