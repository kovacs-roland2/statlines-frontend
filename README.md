# Statlines Frontend

A modern Next.js application built with TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Tech Stack

- **Framework**: [Next.js 15.3.4](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Code Formatting**: [Prettier](https://prettier.io/)
- **Linting**: [ESLint](https://eslint.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

## ✨ Features

- 🎨 **Modern UI**: Beautiful components with shadcn/ui
- 🌙 **Dark Mode**: Built-in dark/light theme support
- 📱 **Responsive**: Mobile-first responsive design
- 🎯 **TypeScript**: Full type safety
- 🎨 **Tailwind CSS**: Utility-first CSS framework
- 🔧 **Auto-formatting**: Prettier with Tailwind class sorting
- 📦 **Component Library**: Pre-built shadcn/ui components
- ⚡ **Fast Refresh**: Hot reload during development

## 🛠️ Getting Started

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

## 📝 Available Scripts

| Command                | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start development server with Turbopack |
| `npm run build`        | Build the application for production    |
| `npm run start`        | Start the production server             |
| `npm run lint`         | Run ESLint to check for code issues     |
| `npm run format`       | Format all files with Prettier          |
| `npm run format:check` | Check if files are properly formatted   |

## 🎨 Adding UI Components

This project uses shadcn/ui for components. To add new components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
# ... add any component you need
```

Available components: [shadcn/ui Components](https://ui.shadcn.com/docs/components)

## 📁 Project Structure

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

## 🎨 Styling & Theming

### Tailwind CSS

- **Version**: v4 (latest)
- **Configuration**: Custom design system with shadcn/ui integration
- **Dark Mode**: Class-based dark mode support

### CSS Variables

The project uses CSS variables for theming, supporting both light and dark modes:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... more variables */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... dark mode variables */
}
```

### Component Styling

- **shadcn/ui**: Pre-built, customizable components
- **Class Variance Authority**: For component variants
- **Tailwind Merge**: Smart class merging utility
- **Auto-sorting**: Tailwind classes are automatically sorted

## 🔧 Development Setup

### VS Code Extensions

The project includes recommended VS Code extensions:

- Prettier - Code formatter
- ESLint - Code linting
- Tailwind CSS IntelliSense - CSS class suggestions
- TypeScript and JavaScript Language Features

### Code Formatting

- **Prettier**: Automatic code formatting
- **ESLint**: Code linting with Prettier integration
- **Format on Save**: Enabled in VS Code settings
- **Tailwind Class Sorting**: Automatic class ordering

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

- **Netlify**: Supports Next.js with minimal configuration
- **Railway**: Easy deployment with GitHub integration
- **Docker**: Use the included Dockerfile for containerization

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [React Documentation](https://react.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run formatting: `npm run format`
5. Run linting: `npm run lint`
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to the branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
