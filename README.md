REACT-SteamLand-app
Steampunk Adventure Park — a React app set in an alternate Victorian era where steam technology evolved to fight the resurgence of the Black Plague.

Overview
This project is a React-based frontend for a steampunk-themed amusement park set in a fictional Victorian alternative timeline. The app offers an immersive UI that combines vintage Victorian aesthetics with modern design and responsiveness.

Features
Responsive Navbar with scroll-based collapsing behavior

Mobile-friendly Navigation Sheet for seamless navigation

Light/Dark Theme Toggle for enhanced UX

Reusable UI components (Badge, Button, Calendar, Card, Tabs, etc.)

Tailwind CSS integration for utility-first styling

React Router for client-side routing

Built with Vite for fast bundling and dev server

Tech Stack
ReactJS

Tailwind CSS

ShadCN UI v0

React Router

Vite

Installation
Clone the repository:

bash
Copia
Modifica
git clone https://github.com/Cristian6597/REACT-SteamLand-app.git
Install dependencies:

bash
Copia
Modifica
npm install
Run the development server:

bash
Copia
Modifica
npm run dev
Open your browser at http://localhost:5173

Project Structure
src/components — reusable UI components

src/pages — page components (e.g. Navbar01Page)

src/utils — utility functions

src/styles — global styles and Tailwind config

src/App.jsx — main app component with routing

src/main.jsx — entry point

Commit Highlight
feat: add responsive navbar with theme toggle and navigation sheet

Implemented Navbar01Page with scroll behavior

Added mobile NavigationSheet

Created ThemeProvider and ThemeToggle

Developed UI components: Badge, Button, Calendar, Card, Tabs, NavigationMenu, Separator, Sheet

Tailwind CSS integration

Vite config for React & Tailwind

Utility functions for class merging and theming

Global styles and theming in index.css
