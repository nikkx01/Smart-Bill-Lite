# 🚀 SmartBill Lite

A full-stack **MERN-based billing application** with secure authentication and real-time bill management.

---

## 🌐 Live Demo

* 🔗 Frontend: https://smart-bill-lite.vercel.app
* 🔗 Backend API: https://smartbill-backend-385q.onrender.com

---

## 📌 Features

### 🔐 Authentication

* User Signup & Login
* JWT-based authentication
* Secure password hashing (bcrypt)

### 🧾 Billing System

* Add new bills (customer + amount)
* View all bills (user-specific)
* Delete bills
* Real-time updates

### 🔒 Security

* Protected routes using middleware
* Token-based authorization

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* JWT
* bcrypt

---

## 📁 Project Structure

```
smartbill-lite/
 ├── client/     # React frontend
 └── server/     # Node.js backend
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/nikkx01/Smart-Bill-Lite.git
cd Smart-Bill-Lite
```

---

### 2️⃣ Setup Backend

```
cd server
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
```

Run server:

```
node server.js
```

---

### 3️⃣ Setup Frontend

```
cd client
npm install
npm run dev
```

---

## 🚀 Deployment

* Frontend deployed on **Vercel**
* Backend deployed on **Render**
* Database hosted on **MongoDB Atlas**

---

## 🎯 API Endpoints

### Auth

* `POST /api/auth/signup` → Register user
* `POST /api/auth/login` → Login user

### Bills

* `POST /api/bills` → Create bill
* `GET /api/bills` → Get all bills
* `DELETE /api/bills/:id` → Delete bill

---

## 🧠 What I Learned

* Building full-stack applications using MERN
* Implementing secure authentication (JWT)
* Designing RESTful APIs
* Handling real-world debugging and deployment
* Managing state and API integration in React

---

## 📌 Future Improvements

* Edit bill functionality
* Search & filter bills
* Dashboard analytics (charts)
* Mobile responsive UI
* Dark mode

---

## 👨‍💻 Author

**Nikhil Anand**

* B.Tech Mathematics & Computing, DTU
* Aspiring Software Developer

---

## ⭐ If you like this project

Give it a star on GitHub ⭐
