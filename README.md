# Party Planning Web App

## Overview

The **Party Planning Web App** is a React-based application designed to help users plan and manage house parties. It provides features such as creating events, managing tasks, and tracking progress for upcoming and past parties.

## Features

- **Create New Events**: Plan a new party by specifying the occasion, size, date, time, and budget.
- **Task Management**: Automatically generate tasks based on surveys and track their completion.
- **Upcoming Parties**: View and manage upcoming events with a detailed checklist.
- **Previous Parties**: Access a history of past events.
- **Localization**: Multi-language support using `i18next`.

## Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **State Management**: Redux Toolkit with persistence
- **Routing**: React Router
- **Build Tool**: Vite
- **Styling**: TailwindCSS with custom themes
- **Icons**: SVG icons with `vite-plugin-svgr`

## Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/amirreza-noori/party-planning-web-app.git
  ```

2. Navigate to the project directory:

  ```bash
  cd party-planning-web-app
  ```

3. Install dependencies:

  ```bash
  npm install
  ```

4. Start the development server:

  ```bash
  npm run dev
  ```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run lint`: Run ESLint to check for code quality issues.
- `npm run preview`: Preview the production build.

## Project Structure

```
src/
├── assets/         # Static assets (images, icons)
├── components/     # Reusable UI components
├── constants/      # Application constants
├── hooks/          # Custom React hooks
├── layouts/        # Layout components
├── pages/          # Page components
├── store/          # Redux store and slices
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
├── i18n/           # Localization files
```

## Configuration

- **TailwindCSS**: Configured in `tailwind.config.mjs`.
- **TypeScript**: Configured in `tsconfig.json` and `tsconfig.app.json`.
- **ESLint**: Configured in `eslint.config.js`.
- **Prettier**: Configured in `.prettierrc`.

## Contributing

1. Fork the repository.
2. Create a new branch:

  ```bash
  git checkout -b feature-name
  ```

3. Commit your changes:

  ```bash
  git commit -m "Add feature-name"
  ```

4. Push to your branch:

  ```bash
  git push origin feature-name
  ```

5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Built with ❤️ using React, Redux, and TailwindCSS.
- Inspired by the need for efficient party planning.
