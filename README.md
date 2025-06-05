# Nektar

[![Continuous Integration](https://github.com/ltsfran/nektar/actions/workflows/ci.yml/badge.svg)](https://github.com/ltsfran/nektar/actions/workflows/ci.yml)

## Project Overview

Nektar is a modern web application built with [Next.js](https://nextjs.org), TypeScript, and pnpm. It is designed as a robust starter template that demonstrates best practices for scalable, maintainable, and high-quality web development. The project includes integrated linting, formatting, testing, and CI/CD workflows.

## Project Considerations

- **TypeScript**: Ensures type safety and better developer experience.
- **ESLint**: Configured for code quality, but linting is skipped during production builds for faster CI/CD.
- **Prettier**: Enforces consistent code formatting across the project.
- **Vitest**: Provides fast and modern unit testing with coverage reports.
- **CI/CD**: GitHub Actions workflow for automated linting, formatting, testing, and building on every push and pull request to `main`.
- **Branch Protection**: Recommended to enable branch protection rules in GitHub to prevent merging PRs while CI is running.
- **pnpm**: Used for fast, efficient dependency management.
- **Next.js Best Practices**: Uses the latest Next.js features, including the App Router and optimized font loading.

## Available Scripts

- `pnpm dev` — Start the development server.
- `pnpm build` — Build the app for production.
- `pnpm start` — Start the production server.
- `pnpm lint` — Run ESLint for code analysis.
- `pnpm format` — Format code with Prettier.
- `pnpm format:check` — Check code formatting.
- `pnpm test` — Run tests with Vitest.
- `pnpm test:watch` — Run tests in watch mode.
- `pnpm test:coverage` — Run tests with coverage report.

## Getting Started

1. Install dependencies:
   ```sh
   pnpm install
   ```
2. Start the development server:
   ```sh
   pnpm dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Folder Structure

- `src/` — Application source code
- `public/` — Static assets
- `test/` — Test utilities and setup
- `.github/workflows/ci.yml` — CI/CD workflow configuration

## Deployment

Deploy easily to [Vercel](https://vercel.com/) or any platform supporting Next.js. See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Feel free to customize this template to fit your project's needs!
