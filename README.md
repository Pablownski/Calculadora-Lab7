# NeoCalc — Motion Calculator

A modern interactive calculator built with React + TypeScript, featuring glassmorphism UI, Framer Motion animations, full test coverage, and Storybook documentation.

**Live demo:** https://cuchito.live/juanpa/Calculadora/

---

## Stack

| Technology | Purpose |
|---|---|
| React 18 | UI |
| TypeScript | Strict typing |
| Vite | Bundler |
| TailwindCSS | Styling |
| Framer Motion | Animations |
| Vitest | Test runner |
| React Testing Library | UI testing |
| Storybook | Component explorer |
| ESLint + Standard | Linting |
| Docker + Nginx | Production server |
| GitHub Actions | CI/CD |

---

## Getting Started

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`

---

## Available Scripts

```bash
npm run dev           # Development server
npm run build         # Production build
npm test              # Tests in watch mode
npm run test:run      # Single test run
npm run lint          # ESLint check
npm run storybook     # Storybook on :6006
npm run build-storybook  # Static Storybook build
```

---

## Tests

73 tests across 7 test files:

| File | Tests | Coverage |
|---|---|---|
| `math.test.ts` | 15 | add, subtract, multiply, divide, modulo |
| `validations.test.ts` | 17 | overflow, negative, max length, decimal, division by zero |
| `formatter.test.ts` | 5 | truncate decimal, format display |
| `useCalculator.test.ts` | 16 | full hook logic and edge cases |
| `Button.test.tsx` | 4 | render, click, variants, aria-label |
| `Display.test.tsx` | 4 | render, error state, accessibility |
| `calculator.integration.test.tsx` | 12 | full user interaction flows |

```bash
npm run test:run
```

---

## Features

- Addition, subtraction, multiplication, division, modulo
- 9-character display limit
- Single decimal point enforcement
- Toggle sign (+/−)
- ERROR state for negative results, overflow (> 999,999,999), and division by zero
- Chained operations
- Glassmorphism UI with aurora animated background
- Framer Motion press and hover animations on buttons
- ERROR shake animation with red glow
- Fully responsive (mobile first)

---

## Project Structure

```
src/
├── components/
│   ├── Button/         # Reusable button with variants
│   ├── Calculator/     # Main container
│   ├── Display/        # Value display with animations
│   ├── Keyboard/       # Button grid layout
│   ├── Layout/         # GlassCard and AuroraBackground
│   └── Operations/     # Operation button group
├── hooks/
│   └── useCalculator.ts  # All calculator logic
├── utils/
│   ├── math.ts           # Pure math functions
│   ├── validations.ts    # Input and result validation
│   └── formatter.ts      # Display formatting
├── types/
│   └── calculator.types.ts
├── constants/
│   └── calculator.constants.ts
├── stories/              # Storybook stories
└── tests/                # All test files
```

---

## Storybook

15 stories covering all component states and variants.

```bash
npm run storybook
```

Opens at `http://localhost:6006`

---

## Docker

```bash
# Build and run with Docker Compose
docker compose up --build
```

App available at `http://localhost:3000`

Uses a multi-stage build: Node 20 Alpine for building, Nginx Alpine for serving. Final image is ~25 MB with no Node.js in production.

---

## Deploy

### Server (Nginx)

```bash
git clone https://github.com/Pablownski/Calculadora-Lab7
cd Calculadora-Lab7
npm install
npm run build
```

Point Nginx `alias` to the generated `dist/` folder.

### Update after changes

```bash
git pull
npm run build
```

---

## CI/CD

GitHub Actions pipeline runs on every push to `main`:

1. Install dependencies
2. Lint
3. Run tests
4. Build
5. Docker build

---

## Linting Rules

- No semicolons
- Max 120 characters per line
- ESLint Standard config
- TypeScript strict mode
