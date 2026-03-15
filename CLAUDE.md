# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Mohammad Pasha Khoshkebari (pasha-khoshkebari.com). Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build system, no package manager.

## Development

There are no build, lint, or test commands. To develop, edit HTML/CSS/JS files directly and open in a browser. The site is statically hosted.

## Architecture

- **`index.html`** — Main portfolio page (nav, hero, about, skills, projects carousel, contact form)
- **`index.css`** — All styles for the main page, including dark/light theme via CSS variables and responsive breakpoints (mobile: <800px, large: >2100px)
- **`index.js`** — Mobile menu toggle, image carousel navigation, dark/light theme toggle
- **`projects/`** — Individual project detail pages, each sharing `projects_index.js` and `projects_styles.css`
- **`goals/index.html`** — Standalone goals/countdown page
- **`pictures/`** — All image assets organized by project subdirectories

## Theming

CSS custom properties on `:root` control the color scheme. Dark mode is toggled via JS by swapping a class, which flips the variable values. Key variables: `--primary`, `--secondary`, `--background`, `--highlighted-words`.

## External Services

- **FormSubmit.co** — Contact form backend (encrypted endpoint in form action)
- **AOS (Animate On Scroll)** — Loaded from unpkg CDN for scroll animations
- **FontAwesome** — Icon kit loaded via JS
- **Google Analytics** — gtag.js with ID `G-JNFR9WE9ED`
