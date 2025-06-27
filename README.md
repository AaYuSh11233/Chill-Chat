# 💬 Chill Chat - Full Stack Realtime Chat Application

A modern, feature-rich real-time chat application built with the MERN stack, featuring beautiful UI components, real-time messaging, and seamless user experience.

## 🌟 Features

### 🔐 Authentication & Security
- **JWT Authentication**: Secure user authentication and authorization
- **Protected Routes**: Client and server-side route protection
- **Password Hashing**: Secure password storage with bcrypt
- **Session Management**: Persistent login sessions with refresh tokens

### 💬 Real-time Messaging
- **Instant Messaging**: Real-time chat with Socket.io
- **Online Status**: Live user presence indicators
- **Typing Indicators**: See when users are typing
- **Message Delivery**: Real-time message delivery confirmation
- **Chat History**: Persistent message storage and retrieval

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first responsive interface
- **Dark/Light Theme**: Toggle between themes with DaisyUI
- **Beautiful Components**: Pre-built components with ShadCN UI
- **Smooth Animations**: Fluid transitions and micro-interactions
- **Emoji Support**: Rich emoji picker and reactions

### 📱 Advanced Features
- **Image Sharing**: Upload and share images via Cloudinary
- **User Profiles**: Customizable user profiles with avatars
- **Search Functionality**: Search users and chat history
- **Notification System**: Real-time notifications for new messages
- **Group Chats**: Create and manage group conversations

### ⚡ Performance & State Management
- **Global State**: Efficient state management with Zustand
- **Optimized Rendering**: React optimization techniques
- **Lazy Loading**: Component and image lazy loading
- **Caching**: Smart caching for better performance

## 🚀 Tech Stack

### Frontend
- **React.js** - UI library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **ShadCN UI** - Modern React component library
- **Zustand** - Lightweight state management
- **Socket.io Client** - Real-time communication

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling
- **Socket.io** - Real-time bidirectional communication
- **JWT** - JSON Web Tokens for authentication

### Cloud Services
- **Cloudinary** - Image and video management
- **MongoDB Atlas** - Cloud database hosting
- **Vercel/Netlify** - Frontend deployment
- **Railway/Render** - Backend deployment

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v19 or higher)
- MongoDB (local or Atlas)
- Cloudinary account
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/AaYuSh11233/Chill-Chat.git
cd Chill-Chat
```

### 2. Install Dependencies

**Backend Dependencies:**
```bash
npm install
```

**Frontend Dependencies:**
```bash
cd frontend
npm install
cd ..
```

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
# Database Configuration
MONGODB_URI=your-mongoDb-uri

# Server Configuration
PORT=5001
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:3000
```

### 4. Database Setup

**Option 1: MongoDB Atlas (Recommended)**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string and add to `MONGODB_URI`

**Option 2: Local MongoDB**
```bash
# Install MongoDB locally
# macOS
brew install mongodb-community

# Ubuntu
sudo apt install mongodb

# Start MongoDB service
mongod
```

### 5. Cloudinary Setup

1. Create account at [Cloudinary](https://cloudinary.com/)
2. Go to Dashboard
3. Copy Cloud Name, API Key, and API Secret
4. Add to your `.env` file

## 🚀 Running the Application

### Development Mode

**Start Backend Server:**
```bash
npm run dev
```

**Start Frontend Development Server:**
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5001`

### Production Build

**Build the application:**
```bash
npm run build
```

**Start production server:**
```bash
npm start
```

## 📁 Project Structure

```
Chill-Chat/
├── backend/
│   ├── controllers/         # Route controllers
│   ├── middleware/          # Custom middleware
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── socket/             # Socket.io configuration
│   ├── utils/              # Utility functions
│   └── server.js           # Main server file
├── frontend/
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── store/          # Zustand store
│   │   ├── utils/          # Utility functions
│   │   ├── styles/         # CSS files
│   │   └── App.jsx         # Main App component
│   ├── index.html          # HTML template
│   ├── vite.config.js      # Vite configuration
│   └── tailwind.config.js  # Tailwind configuration
├── .env                    # Environment variables
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## 🎨 UI Components & Styling

### Tailwind CSS + DaisyUI
- **Utility-first**: Rapid UI development with Tailwind
- **Pre-built Components**: Beautiful components from DaisyUI
- **Theme Support**: Built-in dark/light theme switching
- **Responsive**: Mobile-first responsive design

### ShadCN UI Integration
- **Modern Components**: Accessible and customizable components
- **Consistent Design**: Unified design system
- **TypeScript Support**: Full type safety (if using TypeScript)

### Custom Styling
```css
/* Example custom styles */
.chat-bubble {
  @apply bg-primary text-primary-content rounded-lg p-3 max-w-xs;
}

.online-indicator {
  @apply w-3 h-3 bg-green-500 rounded-full border-2 border-white;
}
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Messages
- `GET /api/messages/:userId` - Get chat messages
- `POST /api/messages/send/:userId` - Send message
- `DELETE /api/messages/:messageId` - Delete message

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:userId` - Get user profile
- `PUT /api/users/profile` - Update profile

## 🔌 Socket.io Events

### Client Events
```javascript
// Join user to socket
socket.emit("join", userId);

// Send message
socket.emit("sendMessage", { receiverId, message });

// Typing indicators
socket.emit("typing", { receiverId, isTyping });
```

### Server Events
```javascript
// Receive message
socket.on("newMessage", (message) => {
  // Handle new message
});

// User online/offline
socket.on("userStatusChange", ({ userId, isOnline }) => {
  // Update user status
});
```

## 🌐 Deployment

### Frontend Deployment (Vercel)

1. **Connect GitHub repository to Vercel**
2. **Configure build settings:**
   ```bash
   Build Command: npm run build
   Output Directory: dist
   ```
3. **Add environment variables in Vercel dashboard**

### Backend Deployment (Railway)

1. **Connect GitHub repository to Railway**
2. **Add environment variables**
3. **Deploy with automatic builds**

### Environment Variables for Production
```env
NODE_ENV=production
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-production-jwt-secret
CLIENT_URL=https://your-frontend-domain.com
```

## 🧪 Testing

### Run Tests
```bash
# Backend tests
npm test

# Frontend tests
cd frontend
npm test
```

### Test Coverage
```bash
npm run test:coverage
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit changes:** `git commit -m 'Add amazing feature'`
4. **Push to branch:** `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Development Guidelines
- Follow ESLint configuration
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 🙏 Acknowledgments

- **MongoDB** - Database platform
- **Socket.io** - Real-time communication
- **Cloudinary** - Image management
- **Tailwind CSS** - Styling framework
- **DaisyUI** - Component library
- **ShadCN UI** - Modern components

## 📞 Support

If you have any questions or need help with setup, please:

1. **Check the documentation** above
2. **Search existing issues** on GitHub
3. **Create a new issue** with detailed description

## 🔗 Links

- **GitHub Repository:** [https://github.com/AaYuSh11233/Chill-Chat.git](https://github.com/AaYuSh11233/Chill-Chat.git)

---

**Built with ❤️ by [AaYuSh11233](https://github.com/AaYuSh11233)**

*Happy Chatting! 💬*
```

This comprehensive README includes:

✅ **Complete feature overview**
✅ **Detailed tech stack explanation**
✅ **Step-by-step setup instructions**
✅ **Environment variables from your example**
✅ **Project structure breakdown**
✅ **API documentation**
✅ **Socket.io events**
✅ **Deployment guides**
✅ **Your GitHub repository link**
✅ **Professional formatting with emojis**
✅ **Contributing guidelines**
✅ **Support information**

The README is structured to be both informative for developers and impressive for potential employers or collaborators!
