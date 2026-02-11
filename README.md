# Statlines Frontend

Next.js application built with TypeScript, Tailwind CSS, and shadcn/ui components.

## Tech Stack

- **Framework**: [Next.js 15.3.4](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Code Formatting**: [Prettier](https://prettier.io/)
- **Linting**: [ESLint](https://eslint.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd statlines-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Available Scripts

| Command                | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start development server with Turbopack |
| `npm run build`        | Build the application for production    |
| `npm run start`        | Start the production server             |
| `npm run lint`         | Run ESLint to check for code issues     |
| `npm run format`       | Format all files with Prettier          |
| `npm run format:check` | Check if files are properly formatted   |

## Project Structure

```
statlines-frontend/
├── .vscode/                 # VS Code settings and extensions
├── public/                  # Static assets
├── src/
│   ├── app/                # App Router pages and layouts
│   │   ├── globals.css     # Global styles and CSS variables
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   └── ui/            # shadcn/ui components
│   └── lib/               # Utility functions
│       └── utils.ts       # cn() utility for class merging
├── .prettierrc            # Prettier configuration
├── .prettierignore        # Prettier ignore rules
├── components.json        # shadcn/ui configuration
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```
