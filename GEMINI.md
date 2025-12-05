# Project Context: Next.js Web Application

## Overview
This is a web application built with **Next.js 15** and **React 19**, using **TypeScript** for type safety and **Tailwind CSS** for styling. The project is configured for **Static Site Generation (SSG)** via `output: "export"`.

## Tech Stack
*   **Framework:** Next.js 15.3.2 (App Router)
*   **UI Library:** React 19.0.0
*   **Language:** TypeScript 5
*   **Styling:** Tailwind CSS 3.4.17
*   **Icons:** Lucide React
*   **Fonts:** Geist Sans, Geist Mono, Pacifico (via `next/font/google`)
*   **Other Libs:** `@react-google-maps/api`, `recharts`

## Getting Started

### Prerequisites
*   Node.js (LTS version recommended)
*   npm, yarn, pnpm, or bun

### Key Commands
*   **Development Server:**
    ```bash
    npm run dev
    # Runs on http://localhost:3000 (binds to 0.0.0.0)
    ```
*   **Build for Production (Static Export):**
    ```bash
    npm run build
    # Generates static HTML/CSS/JS in the `out` directory (default for export)
    ```
*   **Linting:**
    ```bash
    npm run lint
    ```

## Project Structure
*   **`app/`**: Contains the application routes (App Router).
    *   `layout.tsx`: Root layout defining fonts and global styles.
    *   `page.tsx`: Home page.
    *   `globals.css`: Global CSS imports (Tailwind directives).
    *   Subdirectories (`about`, `admission`, `news`, `nurseries`, `recruitment`) represent routes.
*   **`components/`**: Reusable UI components.
    *   Organized by feature (e.g., `home/`) or global usage (`Header.tsx`, `Footer.tsx`).
*   **`public/`**: Static assets (images, fonts, etc.).

## Configuration Highlights

### Next.js (`next.config.ts`)
*   **Static Export:** `output: "export"` is set, meaning the app builds to static HTML files.
*   **Image Optimization:** `images: { unoptimized: true }` is enabled to support static export (Next.js Image Optimization requires a Node.js server).

### TypeScript (`tsconfig.json`)
*   **Path Aliases:** `@/*` is mapped to `./*` (project root).
*   **Strict Mode:** Enabled.

### Tailwind CSS (`tailwind.config.js`)
*   Scans `app`, `components`, `libs`, `pages`, and `hooks` directories for class usage.

## Development Conventions
*   **Component Structure:** Functional components with TypeScript interfaces for props.
*   **Client Components:** Use `'use client'` at the top of files requiring React hooks (useState, useEffect) or browser-only APIs.
*   **Styling:** Utility-first CSS using Tailwind.
*   **Navigation:** Use `Link` from `next/link` for internal navigation.
*   **Language:** The primary content language appears to be Japanese.
