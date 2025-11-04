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

This application is configured for deployment on Render:

1. **Build Command**: `npm install && npm run build`
2. **Start Command**: `npx serve -s build -l 3000`
3. **Environment**: Node

### Render Deployment Steps

1. Push your code to GitHub
2. Connect your GitHub repository to Render
3. Create a new "Static Site" service on Render
4. Set the build command to: `npm install && npm run build`
5. Set the publish directory to: `build`
6. Deploy!

**Note**: For Render static site deployment, you may need to install `serve` as a dev dependency:
```bash
npm install --save-dev serve
```

Or update the start command in Render to use a static file server.

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

