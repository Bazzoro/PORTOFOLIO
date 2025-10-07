# 📋 Task Management App

A collaborative task management application built with React, Node.js, and MongoDB. Features drag-and-drop interface, real-time updates, and calendar integration for seamless team collaboration.

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ Features

- 📋 **Drag & Drop**: Intuitive task management with React Beautiful DnD
- 👥 **Team Collaboration**: Real-time updates with Socket.io
- 📅 **Calendar Integration**: Schedule tasks and track deadlines
- 🔔 **Real-time Notifications**: Instant updates for team members
- 📊 **Project Tracking**: Visual progress tracking and analytics
- 🏷️ **Task Organization**: Categories, tags, and priority levels
- 📱 **Mobile Responsive**: Works seamlessly on all devices
- 🔐 **User Authentication**: Secure JWT-based authentication
- 📈 **Analytics Dashboard**: Performance metrics and insights

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and context
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Redux Toolkit** - State management
- **React Beautiful DnD** - Drag and drop functionality
- **React Big Calendar** - Calendar component
- **Socket.io Client** - Real-time communication

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Socket.io** - Real-time bidirectional communication
- **JWT** - JSON Web Token authentication
- **Bcrypt** - Password hashing

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Testing framework
- **Docker** - Containerization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bazzoro/task-management-app.git
   cd task-management-app
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Set up environment variables**
   
   **Frontend (.env)**
   ```env
   REACT_APP_API_URL=http://localhost:5000
   REACT_APP_SOCKET_URL=http://localhost:5000
   ```
   
   **Backend (.env)**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/taskmanager
   JWT_SECRET=your-super-secret-jwt-key
   NODE_ENV=development
   ```

4. **Start MongoDB**
   ```bash
   # Make sure MongoDB is running
   mongod
   ```

5. **Run the application**
   
   **Terminal 1 - Backend**
   ```bash
   cd backend
   npm run dev
   ```
   
   **Terminal 2 - Frontend**
   ```bash
   cd frontend
   npm start
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
task-management-app/
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   │   ├── TaskCard.tsx
│   │   │   ├── ProjectBoard.tsx
│   │   │   ├── Calendar.tsx
│   │   │   └── DragDropProvider.tsx
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom hooks
│   │   ├── store/        # Redux store
│   │   ├── services/     # API services
│   │   └── utils/        # Utility functions
│   ├── public/           # Static assets
│   └── package.json
├── backend/              # Node.js backend
│   ├── src/
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # Mongoose models
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Custom middleware
│   │   ├── services/     # Business logic
│   │   └── utils/        # Utility functions
│   ├── tests/            # Test files
│   └── package.json
├── docs/                 # Documentation
└── README.md
```

## 🔧 Available Scripts

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## 📸 Screenshots

### Dashboard
![Dashboard](frontend/public/screenshots/dashboard.png)

### Project Board
![Project Board](frontend/public/screenshots/board.png)

### Calendar View
![Calendar](frontend/public/screenshots/calendar.png)

### Team Collaboration
![Team](frontend/public/screenshots/team.png)

## 🎯 Key Features Explained

### Drag & Drop Interface
- **Intuitive Design**: Drag tasks between different status columns
- **Visual Feedback**: Smooth animations and hover effects
- **Real-time Sync**: Changes instantly sync across all team members

### Real-time Collaboration
- **Live Updates**: See team members' changes in real-time
- **Activity Feed**: Track all project activities
- **Notifications**: Get notified of important updates

### Calendar Integration
- **Deadline Tracking**: Visual calendar for task deadlines
- **Event Scheduling**: Schedule meetings and milestones
- **Time Management**: Better project timeline management

## 🧪 Testing

```bash
# Run frontend tests
cd frontend
npm test

# Run backend tests
cd backend
npm test

# Run all tests
npm run test:all
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the build folder
```

### Backend (Heroku/Railway)
```bash
cd backend
# Configure environment variables
# Deploy to your preferred platform
```

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

- [React](https://reactjs.org/) for the amazing UI library
- [Node.js](https://nodejs.org/) for the backend runtime
- [MongoDB](https://www.mongodb.com/) for the database
- [Socket.io](https://socket.io/) for real-time communication
- [React Beautiful DnD](https://github.com/atlassian/react-beautiful-dnd) for drag and drop
