# Game Hub Zone

This project is a game discovery web application built using React, TypeScript, and Vite. It provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

**Live Demo:** https://game-hub-zone.vercel.app/

## Technologies Used

- **React 18:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite:** A next-generation frontend tooling that significantly improves the frontend development experience.
- **ESLint:** Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or later recommended)
- npm (v8 or later) or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/deepaksunny98/game-hub-zone.git
    cd game-hub-zone
    ```
2.  **Install dependencies:**
    This command installs all the necessary project dependencies listed in `package.json`.

    ```bash
    npm install
    ```

    _(or `npm i` for shorthand)_

3.  **Run the development server:**
    This command starts the Vite development server with Hot Module Replacement (HMR) enabled.
    ```bash
    npm run dev
    ```
    Open your browser and navigate to the local URL provided (usually `http://localhost:5173`). The app will automatically reload if you make changes to the code.

## Available Scripts

In the project directory, you can run the following scripts:

- ### `npm run dev`

  Runs the app in development mode. Open http://localhost:5173 (or the specified port) to view it in the browser. The page will reload if you make edits, and you will see any lint errors in the console.

- ### `npm run build`

  Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance. Your app is ready to be deployed!

- ### `npm run lint`

  Runs the ESLint checker to find and report potential problems in your code.

- ### `npm run preview`
  Starts a local static web server that serves the built assets from the `dist` folder. This is useful for verifying the production build locally before deployment.

---
