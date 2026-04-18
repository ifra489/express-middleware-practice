# 🚀 Express Middleware Demo

A beginner-friendly **Node.js + Express.js** project demonstrating different types of middleware including built-in, third-party, custom, and authentication middleware.

---

## 📌 Features

This project covers:

- ✅ Built-in middleware (`express.json`)
- ✅ Third-party middleware (`morgan`)
- ✅ Custom middleware (request logging with timestamp)
- ✅ Application-level authentication middleware
- ✅ Basic REST API routes
- ✅ In-memory data handling

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- Morgan (HTTP request logger)

---

## 📂 Project Structure

```
express-middleware-demo/
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 🚀 How to Run the Project

### 1. Clone the repository
```bash
git clone https://github.com/your-username/express-middleware-demo.git
```
### 2. Install dependencies
```
npm install
```
### 3. Start the server
```
node app.js
```
### 4. Server will run on:
```
http://localhost:3000
📡 API Endpoints
👥 Get all users
GET /users
```
### Response:
```
[
  {
    "id": 1,
    "name": "John Doe",
    "role": "user"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "role": "admin"
  }
]

🔐 Admin Route (Protected)
GET /admin
```
### Response:
```
{
  "message": "Welcome to the admin panel"
}
```
## 🔒 Middleware Overview
### 1. Built-in Middleware
```
app.use(express.json());
```
### 2. Third-party Middleware
```
app.use(morgan('dev'));
```
### 3. Custom Middleware
```
Logs every request with date, method, and URL.
```
### 4. Authentication Middleware
```
Simulates admin access control for protected routes.
```
## 🎯 Learning Outcomes

After completing this project, I understand:

- How middleware works in Express.js
- Request-response lifecycle
- How to create custom middleware
- How authentication middleware is implemented
- How logging works in backend apps
## 👨‍💻 Author
ifra489
