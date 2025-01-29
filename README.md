# Facebook Ads


## Project Overview
This project showcases a responsive and dynamic Facebook Ads website built as part of a job task. Built using React.js, Next.js, Tailwind CSS, and TypeScript, the website allows users to explore various subscription plans with unique features and functionality designed to aid businesses in optimizing their Facebook ad campaigns.

---

## Live : https://facebook-ads-pearl.vercel.app/

## Features

### 1. **Responsive Design**
- Mobile-first approach ensuring compatibility across devices.
- Grid-based layouts for a seamless user experience on desktops, tablets, and smartphones.

### 2. **Subscription Plans**
- Displays three subscription packages, each with:
  - Pricing information (monthly rate).
  - Team size suitability.
  - Included features.
  - Call-to-action button (`Get Started`) with dynamic hover effects.

### 3. **Interactive Buttons**
- Unique hover styles for each plan to visually distinguish between options.
- Active state styling for better user feedback.

---

## Tech Stack

### Frontend
- **React.js**: Framework for building the user interface.
- **Next.js**: Used for server-side rendering and optimized performance.
- **Tailwind CSS**: Utility-first CSS framework for fast and efficient styling.
- **TypeScript**: Ensures type safety and better development experience.

### Tools
- **Vercel**: For deployment.
- **Git**: Version control.

---

## Installation and Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/Mohosin075/facebook-ads-hotchpotch.git
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd facebook-ads
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```

5. **Open the App**
   Visit `http://localhost:3000` in your browser.

---


## Key Components

### **MyPlan**
- Displays the subscription plans dynamically using data from `planData`.
- Each plan has unique hover styles and displays features in a bullet list.

### **SectionTitle**
- Reusable component for displaying section headings and descriptions.

### **Constants.ts**
- Stores static data for subscription plans (e.g., names, pricing, team size, and features).

---

## Deployment
The site is deployed on **Vercel**. Access the live version [here](https://facebook-ads-pearl.vercel.app/).

---

## Customization Guide
- To modify the subscription plans, edit the `planData` object in `Constants.ts`.
- Adjust button styles by modifying the `hover` and `active` classes in `MyPlan`.

---

## Contact
For queries or feedback, please contact:
- **Name**: Md Mohosin Ali
- **Email**: mohosinali075@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/md-mohosin-5b34a0278/

---

Thank you for reviewing this project! 🚀

