# LearnHub - E-learning Platform

## 📌 Overview
LearnHub is a full-featured MERN stack-based e-learning platform that enables users to enroll in courses, track progress, interact with mentors, and earn certificates upon completion. It includes user authentication, course management, payment integration, and cloud storage for seamless learning experiences.


## 🚀 Features

- 🎓 Course Management (Enrollment, Progress Tracking)
- 🔑 Role-Based Authentication (Users, Mentors, Admins)
- 🌐 Google Authentication
- 💳 Integrated Payment Gateway
- 📂 Cloud Storage for Course Materials
- 🛒 Wishlist & Cart System
- ⭐ Course Reviews & Ratings
- 🔔 Real-time Notifications and chat support
- 📜 Certificate Generation

## 🛠️ Tech Stack
- **Frontend:** React (Vite) + Tailwind CSS + ShadCN
- **Backend:** Node.js (Express.js)
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT + Google OAuth
- **Storage:** Cloud-based storage (e.g., AWS S3, Cloudinary)
- **Payment Integration:** Stripe/Razorpay
- **Real time Notification** socket.io
- **Background Jobs:** Cron jobs for cart cleanup

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/aswintrikkur/LearnHub.git
   cd learnhub
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUD_STORAGE_KEY=your_storage_key
   PAYMENT_GATEWAY_KEY=your_payment_api_key
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
5. Run frontend:
   ```bash
   cd client
   npm run dev
   ```

## API Endpoints

# **📌 User Routes**
### **1️⃣ Authentication Routes**

These routes handle user registration, login, logout, and account management.

| Method | Route | Description |
| --- | --- | --- |
| `POST` | `/api/users/register` | Register a new user |
| `POST` | `/api/users/login` | User login |
| `POST` | `/api/users/logout` | User logout |
| `POST` | `/api/users/forgot-password` | Request password reset |
| `POST` | `/api/users/reset-password/:token` | Reset password using token |
| `GET` | `/api/users/check-user` |  |

---

### **2️⃣ Profile Management Routes**

These routes allow users to view and update their profile.

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/api/users/profile` | Get user profile (protected) |
| `PUT` | `/api/users/profile/update` | Update user profile (protected) |
| `PUT` | `/api/users/profile/change-password` | Change user password |

---

### **3️⃣ Course Enrollment & Progress**

Users can **purchase, enroll, and track their course progress**.

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/api/users/my-courses` | Get all enrolled courses |
| `POST` | `/api/users/enroll/:courseId` | Enroll in a course |
| `GET` | `/api/users/course-progress/:courseId` | Get course progress |
| `PUT` | `/api/users/course-progress/:courseId` | Update course progress |

---

### **4️⃣ Wishlist & Cart Management**

Users can add courses to their **wishlist** or **cart** before purchase.

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/api/users/wishlist` | Get user wishlist |
| `POST` | `/api/users/wishlist/:courseId` | Add course to wishlist |
| `DELETE` | `/api/users/wishlist/:courseId` | Remove course from wishlist |
| `GET` | `/api/users/cart` | Get user cart |
| `POST` | `/api/users/cart/:courseId` | Add course to cart |
| `DELETE` | `/api/users/cart/:courseId` | Remove course from cart |

---

### **5️⃣ Reviews & Ratings**

Users can **review courses they have enrolled in**.

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/api/users/reviews/:courseId` | Get course reviews |
| `POST` | `/api/users/reviews/:courseId` | Add review & rating |
| `PUT` | `/api/users/reviews/:reviewId` | Update review |
| `DELETE` | `/api/users/reviews/:reviewId` | Delete review |

---

### **6️⃣ Notifications**

Users can **receive notifications** related to courses, assignments, and payments.

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/api/users/notifications` | Get user notifications |
| `PUT` | `/api/users/notifications/:id` | Mark notification as read |
| `DELETE` | `/api/users/notifications/:id` | Delete notification |

---

### **7️⃣ Certificates & Achievements**

Users can **view and download certificates** for completed courses.

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/api/users/certificates` | Get all earned certificates |
| `GET` | `/api/users/certificates/:courseId` | Download course certificate |

---

# **📌 Mentor Routes**

| **Route** | **Method** | **Description** |
| --- | --- | --- |
| `/profile` | `GET` | Get mentor's profile |
| `/profile` | `PUT` | Update mentor profile |
| `/courses` | `POST` | Create a new course |
| `/courses/:courseId` | `PUT` | Update an existing course |
| `/courses/:courseId` | `DELETE` | Delete a course |
| `/courses` | `GET` | Get all courses created by mentor |
| `/students/progress/:courseId` | `GET` | Get student progress for a course |
| `/students/enrolled/:courseId` | `GET` | Get enrolled students for a course |
| `/assignments/:courseId` | `POST` | Add an assignment to a course |
| `/assignments/:assignmentId` | `DELETE` | Remove an assignment |
| `/assignments/:courseId` | `GET` | Get all assignments for a course |
| `/assignments/grade/:assignmentId` | `PUT` | Grade a student's assignment |
| `/availability` | `PUT` | Toggle mentor's online availability |

---
## Contribution
Feel free to contribute by submitting pull requests, reporting issues, or suggesting improvements.


## 📌 Note
🚧 This project is currently under active development. Features may change or be updated.

