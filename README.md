# 📄 PDF Generator App

A simple Node.js-based application to generate PDFs using server-side rendering. This project demonstrates how to create and serve dynamic PDF files using templates.

## 🚀 Features

- Generate PDF from HTML templates
- Server-side rendering with Express.js and EJS (or your templating engine)
- Clean project structure with routes and views
- Easy to run and extend

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **EJS** (or Handlebars/Pug, if you're using them)
- **PDF Libraries** – e.g., `html-pdf`, `puppeteer`, `pdfkit`

## 📁 Project Structure
project-root/
│
├── db/ # Database related files (if any)
├── node_modules/
├── routes/ # Express routes
├── views/ # EJS or other template files
├── server.js # Main server file
├── package.json
└── package-lock.json

bash
Copy
Edit

## 🧑‍💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Kadirisani-Namitha/pdf-generator.git
cd pdf-generator
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the server
bash
Copy
Edit
node server.js
The app will run on http://localhost:3000 (or your configured port)

