# 🔐 FaceHook Frontend
Welcome to the FaceHook Frontend, the user-facing side of the FaceHook application. This React-based project provides a sleek and interactive UI for users to register, log in, manage posts, and explore their profiles.

## Getting started

Clone the repository:

```bash
git clone https://github.com/M-N-Hossain/FaceHook.git
cd FaceHook/Frontend-web
```

Install All the packages:

```bash
npm install
```

Create a .env file in the root directory with the following:
```bash
VITE_SERVER_BASE_URL=URL
```

Start the development server:
```bash
npm run dev
```

## 🔧 Features

### 🔑 Auathentication
-**Registration**: Sign up with an email, password, first name, and last name.

-**Login**: Authenticate to access protected resources.

___

##📝 Posts

-**View Posts**: Browse all posts.
-**Create Post**: Add new posts with text or images.
-**Like/Comment**: Interact with posts by liking or commenting.
-**Edit/Delete Post**: Manage your own posts.

---

### 🧑‍💻 Profile Management 
- View and update personal information.
- Interact with your own posts

___

### 🌐 API Integration

The frontend communicates with the backend via the following endpoints:

- **Auth Routes**: /auth/register, /auth/login, /auth/refresh-token
- **Post Routes**: /posts, /posts/:id, /posts/:id/like, /posts/:id/comment
- **Profile Routes**: /profile/:id
  
API calls are handled using Axios for clean and efficient request management.

___

### 🎨 Styling
This project uses CSS Modules and SCSS for component-specific styles, ensuring modular and maintainable CSS.

___

### 🤝 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

___


### ✨ Acknowledgments
Built with ❤️ using React and TailwindCSS.
Backend: [FaceHook Server](https://github.com/M-N-Hossain/FaceHook/tree/master/Backend-server)

