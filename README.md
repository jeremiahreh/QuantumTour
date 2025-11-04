# Cinetours

A React-based web application for creating and managing cinematic real estate tours.

## Features

- Client and Admin portals for managing orders and videos
- Video comparison tools
- Pricing management
- Order tracking and status updates
- Brand asset customization
- Testimonials and client logos

## Tech Stack

- React 19.1.1
- React Router DOM
- Stripe for payments
- Bootstrap & React Bootstrap
- Framer Motion for animations
- GSAP for advanced animations
- Axios for API calls

## Getting Started

### Prerequisites

- Node.js (v22.18.0 or compatible)
- npm (v10.9.3 or compatible)

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd Cinetours-main
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment on Render

This application is configured for deployment on Render as a Static Site.

### Render Deployment Steps

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com) and sign in
3. Click "New +" → "Static Site"
4. Connect your GitHub account if needed
5. Select your repository: `cinetours` (or your repo name)
6. Configure the deployment:
   - **Name**: `cinetours` (or your preferred name)
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
7. Click "Create Static Site"

Render will automatically:
- Build your React app
- Deploy it to a URL (e.g., `https://cinetours.onrender.com`)
- Automatically redeploy when you push to the `main` branch

### Important Notes

- The app uses React Router with client-side routing. The `_redirects` file in `public/` ensures all routes work correctly.
- If you need environment variables, add them in Render's dashboard under "Environment" section.
- The `render.yaml` file is included for optional Blueprint deployments, but manual setup is recommended for first-time deployment.

## Environment Variables

Create a `.env` file in the root directory for environment-specific variables:

```
REACT_APP_API_URL=your_api_url
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_key
```

## Project Structure

```
src/
├── Components/        # Reusable UI components
├── pages/            # Page components
│   ├── AdminPortal/  # Admin dashboard
│   ├── ClientPortal/ # Client dashboard
│   └── Auth/         # Authentication pages
├── auth/             # Authentication context and routes
├── services/         # API services
└── utils/            # Utility functions
```

## License

Private project - All rights reserved

