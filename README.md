# 🧪 Nova Technical Challenge – Professional Recommendations

Welcome to my submission for the Nova frontend developer challenge. This repository contains the implementation of a new **Professional Recommendations** feature for a modern professional social network — allowing users to recommend one another, similar to LinkedIn.

## 🚀 Project Overview

This feature includes:

- A **User Profile View** displaying:
  - Name, photo, current role and company
  - List of received professional recommendations
- A **Form** to write and submit new recommendations
- A **List of Recommendations** showing:
  - Author info (photo, name, position)
  - Date and content
- **Validation & feedback** for the form (success/error states)

Responsive, accessible and mobile-first by design ✅

## 🧰 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Type Safety**: TypeScript
- **State Management**: React state + future optional context/store (maybe Zustand)

## 🛠️ Getting Started

To run the project locally:

```bash
# 1. Clone the repo
git clone https://github.com/EdgarIvanEspinoza/nova-technical-challenge.git
cd nova-technical-challenge

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Then visit `http://localhost:3000` to view the app.

## 🛠️ Potential Improvements and Technical Decisions

### Technical Decisions

- **UI Library: [shadcn/ui]**  
  I chose shadcn/ui because of its seamless integration with TailwindCSS and React, accessible design, and modular components that speed up development without sacrificing flexibility. Additionally, since components are installed as separate packages within the project, it facilitates customization and long-term scalability.

- **Client-Side Rendering (`'use client'`)**  
  Most of the form and component logic runs on the client for fast, interactive experiences. However, to optimize performance and SEO, migrating some components to server-side rendering with React Server Components (`'use server'`) and optimized API calls could be explored.

- **Form Handling with React Hook Form**  
  React Hook Form is used for efficient form validation and control. It performs well, offers excellent TypeScript support, and keeps the code clean and scalable.

### Potential Improvements

- **API Integration with WebSocket for Real-Time Updates**  
  Currently, the form submission refreshes locally, but the recommendations list doesn’t update automatically. Implementing a backend with WebSocket would enable real-time events so users can see new recommendations instantly without page reloads.

- **Real-Time Notifications**  
  Adding immediate visual notifications on submitting or receiving recommendations would enhance user engagement and foster a sense of an active community.

- **Unit and End-to-End Testing**  
  Including unit tests with Vitest and Testing Library to ensure quality and stability, plus end-to-end tests with Playwright to validate full user flows and prevent regressions in production.

- **Performance Optimization**  
  Exploring React Server Components and Next.js API Routes to offload heavy operations to the server, reduce client bundle size, and improve load times and SEO.
