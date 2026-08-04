# Keen Keeper — Smart Inventory & Asset Management System
A modern, full-stack inventory and asset management web application designed to help organizations seamlessly track, manage, and assign equipment, devices, and company assets.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Dependencies](#dependencies)
- [Installation & Setup](#installation--setup)
- [Folder Structure](#folder-structure)
- [Contributions](#contributions)
- [How to Contribute](#how-to-contribute)
- [License](#license)
- [Contact](#contact)

---

## About the Project 
**Keen Keeper** is an intuitive inventory and asset management platform built to streamline equipment tracking and employee requests. Managing company hardware, office furniture, and digital assets often leads to lost items, unorganized allocation, and poor visibility into item stock. 

Keen Keeper solves this by providing role-based dashboards for **HR/Managers** and **Employees**, allowing seamless asset requests, automated approvals, real-time inventory tracking, and transparent reporting.

---

## Project Overview  
The primary objective of Keen Keeper is to eliminate spreadsheet-based tracking and deliver an automated asset management experience.

- **Role-Based Workflows:** Tailored interfaces for Asset Managers/HR and General Employees.
- **Real-Time Stock Updates:** Track item availability, requested statuses, and return dates dynamically.
- **Data Insights:** Visually monitor top requested assets, pending approvals, and team distributions.
- **Responsive UI:** Seamless experience across desktop, tablet, and mobile devices.

---

## Key Features  
- **Role-Based Authentication:** Secure login & signup supporting HR and Employee roles with custom dashboard layouts.
- **Asset Management Dashboard:** HR managers can add, edit, delete, and categorize company assets (Returnable vs. Non-Returnable).
- **Employee Request System:** Employees can search available assets, submit requests with custom notes, and track request statuses (Pending, Approved, Rejected).
- **Approval & Return Management:** Managers can approve or reject pending requests and track returned items easily.
- **Interactive Search & Filtering:** Filter assets by type, availability status, or search by keyword for quick access.
- **PDF Generation & Export:** Print or export asset assignment details and team lists for reporting.
- **Responsive & Dark Mode UI:** Styled with Tailwind CSS and DaisyUI for an elegant, modern user interface.

---

## Tech Stack  
**Frontend:** React.js · Tailwind CSS · DaisyUI · React Router  
**Backend:** Node.js · Express.js · MongoDB · Mongoose  
**Authentication & Hosting:** Firebase Auth · Netlify (Client) · Vercel/Render (Server)  
**Tools:** Git · GitHub · VS Code · Postman

---

## Dependencies  
List of key dependencies used in the project:

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "firebase": "^10.7.0",
  "lucide-react": "^0.294.0",
  "tanstack/react-query": "^5.12.0",
  "axios": "^1.6.2",
  "sweetalert2": "^11.10.0",
  "tailwindcss": "^3.3.6",
  "daisyui": "^4.4.19"
}
