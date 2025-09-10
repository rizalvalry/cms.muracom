# E-commerce User Dashboard

This project is a modern frontend implementation for an e-commerce user dashboard, allowing users to manage their profiles and track order status. Built with React, TypeScript, Vite, and Tailwind CSS, it focuses on a clean, responsive UI/UX and premium aesthetics.

## Key Features

- **Profile Settings**: Users can view and update personal information and shipping addresses.
- **Order History**: A detailed list of orders with status, items, and payment details.
- **Visual Status Tracking**: An interactive `StatusBar` component to track order progress from "Processing" to "Delivered".
- **Modern & Responsive Design**: An elegant interface that works well on both desktop and mobile devices.

---

## Prerequisites

Make sure you have Node.js (https://nodejs.org/) (version 18 or higher recommended) and npm installed on your system.

---

## Usage Guide

### 1. Project Setup

After cloning or downloading the repository, navigate to the project directory and install all necessary dependencies.

```bash
npm install
```

### 2. Running in a Local Environment (Development)

To start the development server, run the following command. This command will open the application in your browser (usually at `http://localhost:5173`) and will automatically refresh the page every time you make a change to the code.

```bash
npm run dev
```

This is the ideal mode for development and testing new features.

### 3. Building for Production

When your application is ready to deploy, you need to create a production-optimized build. This process will compile, bundle, and minify all files (JavaScript, CSS, assets) into the `dist` folder.

```bash
npm run build
```

After this command completes, you will find a new folder named `dist` in your project's root directory. This is the folder you will deploy to.

### 4. Previewing the Production Build

Before uploading to a server, it is highly recommended to check that the production build runs correctly in a local environment. Vite provides a simple static server for this purpose.

```bash
npm run preview
```

This command will run the application from the `dist` folder at a different URL (e.g., `http://localhost:4173`). This is the best way to ensure there are no issues after the build process, such as path issues or missing assets.

### 5. Deployment to cPanel (Shared Hosting)

This application is specifically configured for easy deployment to shared hosting environments like cPanel.

1. **Run the Build Process**: Make sure you've run `npm run build` and that the `dist` folder has been created.
2. **Open cPanel**: Log in to your hosting cPanel account.
3. **Open File Manager**: Navigate to the "File Manager" application.
4. **Open `public_html`**: Within File Manager, navigate to the `public_html` directory (or your designated subdomain/addon domain). This is the root folder for your website.
5. **Upload Content**: **IMPORTANT!** Do not upload the `dist` folder itself. Instead, open the `dist` folder on your computer, select **all the files and folders inside** (`index.html`, `assets` folder, etc.), and then upload them all to `public_html`.
6. **Done!**: Once the upload process is complete, your application will be accessible through your domain.