# Cards Against Humanity – Headless Commerce Clone

This project recreates key pages from the **Cards Against Humanity website** using a modern **headless commerce architecture**.  
The goal of this assignment was to build a **production-style storefront** where content and commerce are completely decoupled and managed dynamically through APIs.

The project uses:

- **Next.js** for the frontend storefront
- **Payload CMS** for dynamic content management
- **Medusa.js** for ecommerce functionality

---

# Tech Stack

## Frontend
- Next.js (App Router)
- Tailwind CSS
- TypeScript
- Server Components
- Deployed on **Vercel**

## CMS
- Payload CMS
- MongoDB
- Dynamic content management
- Deployed on **Vercel**

## Commerce Backend
- Medusa.js
- PostgreSQL
- REST API
- Deployed on **Render**

---

# Architecture

This project follows a **Headless Commerce Architecture**.


User Browser
↓
Next.js Frontend
↓
Payload CMS (Content API) + Medusa.js (Commerce API)
↓
Database


The frontend fetches content from **Payload CMS** and commerce data from **Medusa.js**.

---

# Features Implemented

## Frontend
- Pixel-inspired UI based on Cards Against Humanity
- Dynamic CMS content
- Responsive layout
- Server-side rendering
- Product page
- Cart functionality

## CMS (Payload)
- Dynamic hero section
- Product content
- Images
- Marketing text
- Button text
- Editable content through admin panel

## Commerce (Medusa)
- Product retrieval
- Add to cart
- Cart persistence
- Checkout initialization
- Order creation

---

# Pages Implemented

## Homepage

Reference  
https://www.cardsagainsthumanity.com/

Includes:

- Hero section
- CMS controlled text
- CTA buttons
- Responsive layout

---

## Product Page

Reference  
https://www.cardsagainsthumanity.com/products/more-cah

Includes:

- Product title
- Images
- Description
- Price
- Add to cart
- Cart interaction

---

# CMS Implementation

All site content is **fully dynamic** and managed through **Payload CMS**.

Editable fields include:

- Hero title
- Subtitle
- Button text
- Product information
- Images
- Descriptions
- Marketing sections

Updating content in Payload CMS automatically updates the frontend.

---

# Commerce Implementation

Medusa.js powers the ecommerce functionality.

Implemented features include:

- Product retrieval
- Cart creation
- Cart persistence
- Checkout initialization
- Order creation

---

# Cart Flow


User adds product to cart
↓
Frontend calls Medusa Store API
↓
Cart created in Medusa
↓
Cart ID stored in browser
↓
Cart retrieved on refresh


Cart state is stored using:

- Medusa backend
- Browser localStorage

---

# CMS ↔ Commerce Sync

Product data synchronization between **Payload CMS** and **Medusa** is handled through API integration.

Workflow:


Product created in Payload CMS
↓
API sync updates product in Medusa
↓
Medusa stores commerce data


---

# Performance

The site was optimized for:

- Lighthouse performance
- SEO tags
- Image optimization
- Accessibility best practices

Target Lighthouse score:

**90+**

---

# Project Structure


cah-clone

frontend
Next.js storefront

cms
Payload CMS backend

medusa-backend
Medusa commerce backend


---

# Setup Instructions

Clone the repository:


git clone https://github.com/man0612/cah-clone.git


---

## Run CMS


cd cms
npm install
npm run dev


CMS runs at:


http://localhost:3001


---

## Run Medusa Backend


cd medusa-backend
npm install
npm run dev


Backend runs at:


http://localhost:9000


---

## Run Frontend


cd frontend
npm install
npm run dev


Frontend runs at:


http://localhost:3000


---

# Environment Variables

## Frontend


NEXT_PUBLIC_CMS_URL=http://localhost:3001

NEXT_PUBLIC_MEDUSA_URL=http://localhost:9000


## CMS


PAYLOAD_SECRET=your_secret
DATABASE_URI=mongodb_connection_string


## Medusa


DATABASE_URL=postgres_connection_string
JWT_SECRET=secret
COOKIE_SECRET=secret


---

Example:


/screenshots/homepage.png
/screenshots/product-page.png
/screenshots/cms-admin.png

---

# Author

Kri Manshi Singh  
Frontend Developer Candidate  
WeFrame Tech Internship Assignment
