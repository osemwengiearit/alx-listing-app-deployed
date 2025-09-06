
# ALX Listing App - Milestone 04

This project is part of the ALX Full-Stack Software Engineering Program.

## 📌 Milestone 04 Objective

In this milestone, we dynamically integrate the property listing, property detail, booking, and review pages with a RESTful API. This replaces hardcoded data with real-time data fetched from the API.

### ✅ Features Implemented

- Fetch and display **Property Listings** from REST API on the homepage (`pages/index.tsx`).
- Handle **loading** and **error** states when fetching property data.
- Basic layout components (`Layout`, `PropertyCard`) used to display each property.
- Organized project structure with `components` and `pages` folders.
- Dynamic data fetching using `useEffect` and `useState` in React.

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/)
- TypeScript
- Tailwind CSS (optional for styling)
- React Hooks (`useEffect`, `useState`)
- JSON Server (or custom REST API for local data)

## 📁 Project Structure

```
alx-listing-app-04/
├── components/
│   ├── Layout.tsx
│   └── PropertyCard.tsx
├── pages/
│   ├── index.tsx
│   └── property/
│       └── [id].tsx
├── public/
├── styles/
├── next.config.mjs
├── package.json
└── README.md
```

## ▶️ Getting Started

1. **Install dependencies**

```bash
npm install
```

2. **Start the development server**

```bash
npm run dev
```

3. Visit [http://localhost:3000](http://localhost:3000) to view the property listings.

## 🚀 API Integration

- Make sure JSON Server or any mock REST API is running and accessible at:
  - `http://localhost:3001/properties`
  - `http://localhost:3001/bookings`
  - `http://localhost:3001/reviews`

## 📚 Learning Outcome

- Understanding of `useEffect` for fetching data
- Replacing hardcoded content with dynamic API-driven content
- Building scalable components with real-time updates

# 🏡 ALX Listing App

A simple property listing application built with **Next.js**, **TypeScript**, and **JSON Server** as part of the **ALX Frontend Capstone Project**.

---

## 🚀 Features

- View a list of properties
- View property details dynamically via API
- Integrated mock REST API using JSON Server
- Clean and responsive UI

---

## 🛠️ Tech Stack

- Next.js (React Framework)
- TypeScript
- Axios (for API calls)
- JSON Server (Mock REST API)
- Tailwind CSS (optional if used)
- Node.js

---

## 🖼️ Screenshots

> _Coming soon: Add screenshots here or GIFs to show the app UI._

---

## ⚙️ Getting Started

### 🔧 Prerequisites

# alx-listing-app-04

## 📌 Project Overview
This is a dynamic property listing app built with Next.js. It allows users to browse properties, make bookings, and leave reviews. The app fetches data from a REST API and supports dynamic rendering.

## 🏗 Features
- View property listings
- Dynamic routing for property pages
- Booking form with API submission
- JSON Server for mock backend
- Review system

## 🚀 Getting Started

### Prerequisites
- Node.js
- npm or yarn
- JSON Server (for local API)

### Installation
```bash
git clone https://github.com/joshuaemorwodia/alx-listing-app-04.git
cd alx-listing-app-04
npm install


- Node.js and npm installed
- Git installed
- JSON Server installed globally:

```bash
npm install -g json-server
### 🧾 Review Feature

- Dynamically fetches reviews for each property using JSON Server.
- Endpoint: `/reviews?propertyId={id}`
- Example:
  ```bash
  http://localhost:3001/reviews?propertyId=1

