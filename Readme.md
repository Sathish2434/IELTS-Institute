# Overview

This is a full-stack web application built as an IELTS (International English Language Testing System) training platform. The application provides an online learning environment for students preparing for IELTS exams, featuring course materials, practice tests, AI-powered scoring, and expert guidance. The platform aims to help students achieve their target IELTS scores through comprehensive training modules and personalized feedback.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using **React 18** with **TypeScript** and follows a component-based architecture. Key design decisions include:

- **UI Framework**: Uses **shadcn/ui** components built on top of **Radix UI** primitives for accessible, customizable components
- **Styling**: **Tailwind CSS** with CSS variables for theming, providing a warm, educational color palette (cream/beige backgrounds with olive green accents)
- **Routing**: **Wouter** for lightweight client-side routing
- **State Management**: **TanStack Query** (React Query) for server state management and caching
- **Form Handling**: **React Hook Form** with **Zod** validation for type-safe form management
- **Build Tool**: **Vite** for fast development and optimized production builds

The component structure is organized into:
- `/components/ui/` - Reusable UI primitives
- `/components/` - Feature-specific components (navbar, hero, testimonials, etc.)
- `/pages/` - Route components
- `/hooks/` - Custom React hooks
- `/lib/` - Utility functions and configurations

## Backend Architecture
The backend follows a **Node.js/Express** architecture with TypeScript:

- **Runtime**: **Node.js** with **ESM modules**
- **Framework**: **Express.js** for HTTP server and API routing
- **Database ORM**: **Drizzle ORM** with PostgreSQL dialect for type-safe database operations
- **Build Process**: **esbuild** for production bundling
- **Development**: **tsx** for TypeScript execution in development

The server architecture includes:
- Centralized route registration system
- Storage abstraction layer with both in-memory and database implementations
- Middleware for request logging and error handling
- Vite integration for development mode

## Data Storage
The application uses a flexible storage architecture:

- **Primary Database**: **PostgreSQL** via **Neon Database** serverless connection
- **ORM**: **Drizzle ORM** for type-safe database operations and migrations
- **Schema Management**: Centralized schema definitions with **Zod** integration for validation
- **Development Storage**: In-memory storage implementation for development/testing

Current schema includes user management with plans for expanding to course content, test results, and progress tracking.

## Authentication & Session Management
The system is prepared for session-based authentication:

- **Session Store**: **PostgreSQL** session storage via **connect-pg-simple**
- **Security**: Cookie-based sessions with secure configuration
- **User Management**: Basic user schema with username/password authentication ready for implementation

## Development & Deployment
The application is configured for both development and production environments:

- **Development**: Hot module replacement via Vite, TypeScript checking, and in-memory storage
- **Production**: Optimized builds with static asset serving and database connectivity
- **Database Migrations**: Drizzle Kit for schema migrations and database management
- **Environment Configuration**: Separate configurations for development and production modes

## Design System
The application implements a cohesive design system:

- **Typography**: Inter font family for modern, readable text
- **Color Scheme**: Warm, educational palette with cream backgrounds and olive green accents
- **Component Library**: Consistent component variants using **class-variance-authority**
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Accessibility**: Built on Radix UI primitives ensuring WCAG compliance

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **connect-pg-simple**: PostgreSQL session store for user session management

## UI & Styling
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Headless UI components for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across frontend and backend
- **Drizzle Kit**: Database migration and management tools
- **esbuild**: Fast JavaScript/TypeScript bundler for production

## Runtime Libraries
- **TanStack Query**: Server state management and data fetching
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library
- **date-fns**: Date manipulation utilities
- **Wouter**: Lightweight routing library

## Replit Integration
- **@replit/vite-plugin-cartographer**: Development environment integration
- **@replit/vite-plugin-dev-banner**: Development indicators
- **@replit/vite-plugin-runtime-error-modal**: Enhanced error reporting

The application is structured to easily scale from the current landing page to a full-featured IELTS training platform with course management, progress tracking, and interactive learning modules.