# GameShelf

A modern Progressive Web App (PWA) to manage your personal gaming collection.

## Tech Stack
- React 19
- TypeScript
- Vite
- TailwindCSS v4
- React Router DOM v7
- React Query
- Firebase (Firestore, Auth, Storage)

## Folder Structure
```
src/
├── assets/      # Static assets (images, icons)
├── components/  # Reusable UI components
│   ├── layout/  # Layout specific components (Sidebar, TopBar)
│   ├── shared/  # Shared components (Buttons, Inputs)
│   └── ui/      # Core UI components
├── config/      # Application configurations (Firebase, etc)
├── contexts/    # React Context providers (Auth, Theme)
├── features/    # Feature-based modules (Games, Consoles)
├── hooks/       # Custom React hooks
├── layouts/     # Page layout wrappers
├── pages/       # Route page components
├── services/    # External API and Firebase services
├── styles/      # Global CSS
├── types/       # TypeScript type definitions
└── utils/       # Utility functions
```

## Setup & Running Locally

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up Firebase:
   - Create a Firebase project
   - Enable Firestore and Authentication (Google & Anonymous)
   - Copy `.env.example` to `.env` and fill in your Firebase credentials:
     ```bash
     cp .env.example .env
     ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Deploying to Netlify

1. Connect your GitHub repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Make sure to add your Firebase environment variables in the Netlify dashboard.
