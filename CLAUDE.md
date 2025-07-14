# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus-based wiki for the Fydetab Duo Linux tablet. The project provides comprehensive documentation for users and developers working with the Fydetab Duo device, including setup instructions, OS installation guides, and hardware information.

## Key Commands

### Development
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run build:zh` - Build Chinese version only
- `npm run build:en` - Build English version only
- `npm run serve` - Serve built site locally
- `npm run clear` - Clear Docusaurus cache

### Deployment
- `npm run deploy` - Deploy to production

### Content Management
- `npm run write-translations` - Generate translation files
- `npm run write-heading-ids` - Generate heading IDs for docs

## Architecture

### Content Structure
- **docs/**: Main documentation in English
  - Auto-generated sidebar structure based on filesystem
  - Organized into categories: intro, flashing, hardware, OS options, hacking guides
  - Each category has `_category_.json` files for metadata

- **i18n/zh-Hans/**: Chinese translations
  - Mirrors the English docs structure
  - Includes localized navigation and theme files

### Key Configuration Files
- **docusaurus.config.js**: Main configuration
  - Bilingual support (English/Chinese)
  - Search plugin configuration
  - Theme and navigation settings
  - Client-side redirects

- **sidebars.js**: Sidebar configuration (auto-generated from file structure)
- **package.json**: Scripts and dependencies

### Internationalization
- Default locale: English (`en`)
- Supported locales: English (`en`), Simplified Chinese (`zh-Hans`)
- Locale-specific footer links and copyright text
- Environment-based locale detection

### Custom Features
- Local search with `@easyops-cn/docusaurus-search-local`
- Client-side redirects for URL management
- Custom CSS in `src/css/custom.css`
- Collapsible and hideable sidebar

## Content Guidelines

### File Organization
- Use descriptive filenames with proper numbering (e.g., `1.Introduction.md`)
- Group related content in subdirectories
- Include `_category_.json` files for category metadata

### Markdown Files
- All documentation is in Markdown format
- Support for MDX components
- Edit URLs point to GitHub repository

### Assets
- Images and binary files in `static/` directory
- Technical documentation (PDFs, datasheets) in `static/img/`
- Favicon and logos in `static/img/`

## Development Notes

### Node.js Requirements
- Node.js >= 18.0 required
- Uses npm for package management

### Build Process
- Production builds support both languages
- Separate build commands for individual locales
- Static site generation for deployment

### Search
- Local search implementation (no external search service)
- Indexes both documentation and pages
- Supports both English and Chinese content