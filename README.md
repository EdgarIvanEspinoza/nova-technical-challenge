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
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
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
yarn install

# 3. Run the dev server
yarn run dev
```

Then visit `http://localhost:3000` to view the app.

## 🧪 Planned Features

- [x] Responsive layout
- [x] Submit form with validation
- [x] Display list of recommendations
- [ ] Mocked logged-in user
- [ ] Edit/Delete own recommendation (optional)
- [ ] Unit tests with Vitest/Testing Library
- [ ] Clean component architecture
- [ ] Optional e2e with Playwright
