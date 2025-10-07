# 🛒 E-Commerce Platform

A modern, full-stack e-commerce platform built with Next.js, TypeScript, and PostgreSQL. Features include payment processing, inventory management, and real-time notifications.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- 🛒 **Shopping Cart**: Real-time cart updates with persistent storage
- 💳 **Payment Processing**: Secure payments powered by Stripe
- 📦 **Inventory Management**: Real-time stock tracking and alerts
- 🔐 **Authentication**: Secure user authentication with NextAuth.js
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🔔 **Real-time Notifications**: Live updates for orders and inventory
- 📊 **Admin Dashboard**: Comprehensive management interface
- 🔍 **Search & Filter**: Advanced product search and filtering
- 📈 **Analytics**: Sales and performance tracking

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Zustand** - Lightweight state management

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Prisma ORM** - Type-safe database access
- **NextAuth.js** - Authentication solution
- **Stripe** - Payment processing
- **WebSocket** - Real-time communication

### Database
- **PostgreSQL** - Relational database
- **Redis** - Caching and sessions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bazzoro/ecommerce-platform.git
   cd ecommerce-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/ecommerce"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_PUBLISHABLE_KEY="pk_test_..."
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ecommerce-platform/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (auth)/         # Authentication routes
│   │   ├── cart/           # Shopping cart pages
│   │   ├── checkout/       # Checkout process
│   │   ├── products/       # Product pages
│   │   └── admin/          # Admin dashboard
│   ├── components/         # Reusable components
│   │   ├── ui/            # Base UI components
│   │   ├── ProductCard.tsx
│   │   ├── Cart.tsx
│   │   └── PaymentForm.tsx
│   ├── lib/               # Utility functions
│   │   ├── database.ts
│   │   ├── auth.ts
│   │   └── stripe.ts
│   └── types/             # TypeScript definitions
├── prisma/                # Database schema
├── public/                # Static assets
└── docs/                  # Documentation
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Prisma Studio

## 📸 Screenshots

### Homepage
![Homepage](public/screenshots/homepage.png)

### Product Page
![Product Page](public/screenshots/product.png)

### Shopping Cart
![Shopping Cart](public/screenshots/cart.png)

### Admin Dashboard
![Admin Dashboard](public/screenshots/admin.png)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Baskoro Rizky Adiputra**
- GitHub: [@Bazzoro](https://github.com/Bazzoro)
- LinkedIn: [Baskoro Rizky Adiputra](https://linkedin.com/in/baskoro-rizky)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Stripe](https://stripe.com/) for payment processing
- [Prisma](https://prisma.io/) for the database toolkit
