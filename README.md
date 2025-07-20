# Subscription_Tracker_API
A Scalable and Production Ready Subscription Tracker API that handles real business logic and implements Arcjet for Rate limiting and Bot protection and MongoDB and its ORM/ODM mongoose for database management.
# 📦 Subscription Tracker API

A **production-ready**, secure, and scalable REST API for managing user subscriptions with real business logic, rate limiting, and bot protection.

---

## 🚀 Features

- 🔐 JWT-based user authentication
- 📊 Subscription management with CRUD operations
- 🧰 Global error handling & custom middleware
- 🛡️ Advanced rate limiting & bot protection using **Arcjet**
- 🧩 Clean and modular architecture (MVC)
- 🗃️ MongoDB database integration with Mongoose
- ⚙️ Workflow management via **Upstash**
- 📬 Smart Email Notification System *(coming soon)*

---

## 🧠 What I Learned

- How backend servers work under the hood
- Implementing secure APIs using **JWT**
- Designing schemas & managing databases with **ORMs**
- API protection with **Arcjet** (rate limiting + bot detection)
- Building scalable workflows with **Upstash**
- Creating global error handlers and reusable middleware functions

---

## 🛠 Tech Stack

| Technology   | Purpose                          |
|--------------|----------------------------------|
| Node.js      | Runtime environment              |
| Express.js   | Web framework                    |
| MongoDB      | NoSQL Database                   |
| Mongoose     | MongoDB ORM                      |
| JWT          | Authentication                   |
| Arcjet       | Rate Limiting & Bot Protection   |
| Upstash      | Workflow & Job Management        |
| Dotenv       | Environment variable handling    |
| Nodemailer   | *(In Progress)* Email functionality |

---

## 🔧 Installation

```bash
git clone https://github.com/yourusername/subscription-tracker-api.git
cd subscription-tracker-api
npm install
```

## Configurations
Configure your env file like this
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
ARCJET_SECRET=your_arcjet_secret
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token


## PULL REQUESTS
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
