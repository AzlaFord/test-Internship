# Product Catalog

A React TypeScript application that displays a product catalog with shopping cart functionality.

## Features

- Browse products from Fake Store API
- Filter products by category
- Sort products by price
- Add/remove items to/from cart
- Adjust quantities in cart
- Responsive design
- Modern UI with clean aesthetics

## Tech Stack

- React 18
- TypeScript
- React Router v6
- Vite
- CSS3

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd product-catalog
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── context/       # React Context for state management
  ├── types/         # TypeScript interfaces
  ├── assets/        # Static assets
  ├── App.tsx        # Main application component
  └── main.tsx       # Application entry point
```

## API

This project uses the [Fake Store API](https://fakestoreapi.com/) for product data.

## Deployment

The project is built using Vite and can be deployed to any static hosting service:

1. Build the project:
```bash
npm run build
```

2. The `dist` folder will contain the production-ready files.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
