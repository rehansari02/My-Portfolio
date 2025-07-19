# 🚀 My Developer Portfolio

Welcome to my personal developer portfolio built with **React.js**, **Tailwind CSS**, and smooth animations. This project showcases my skills, projects, and journey as a web developer.

---

## 🧠 Tech Stack

- **Frontend:** React.js, Tailwind CSS, Framer Motion, React Icons
- **Form Handling:** EmailJS
- **Routing:** React Router
- **Deployment:**

---

## 🔥 Features

- 🔹 Responsive Design for all devices
- 🔹 Smooth Animations using Framer Motion
- 🔹 Contact Form with Email functionality using EmailJS
- 🔹 Skills, Projects, and Education timeline
- 🔹 Dark-themed UI with modern gradients

---

## 📁 Folder Structure

src/
│
├── assets/ # Images & icons
├── components/ # All reusable UI components , # Main sections: About, Projects, Contact
├── App.jsx # Main App
├── main.jsx # Entry point
├── index.css # Tailwind + custom CSS

---

## ⚙️ Environment Variables

Create a `.env` file in the root and add your EmailJS keys like this:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

Use them like this in code:

```js
import.meta.env.VITE_EMAILJS_SERVICE_ID;
```
