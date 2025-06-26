# React + TypeScript + Vite

## Installation guide :

npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install
npm run dev

## Install Router for react:

npm install react-router-dom

## Install ESLint and preetier :

1.npm install -D eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser

2.You'll need an ESLint configuration file in your project's root directory. You can create one manually or use the ESLint initialization command.
npx eslint --init

3. Added configuration in program.cs
   "scripts": {
   "dev": "vite",
   "build": "tsc -b && vite build",
   "lint": "eslint \"src/**/\*.{js,jsx,ts,tsx}\"",
   "lint:fix": "eslint \"src/**/\*.{js,jsx,ts,tsx}\" --fix",
   "preview": "vite preview"
   },

4.create a .eslintignore file
#.eslintignore
build/
node_modules/
dist/
coverage/
   "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\"",
    "lint:fix": "eslint \"src/**/*.{js,jsx,ts,tsx}\" --fix",
    "preview": "vite preview",
    "format": "prettier --write ."
  },

5.run eslint in any of your file
npx eslint yourfile.js
npm run lint
npm run lint:fix


6.now we will configure prettier run prettier
npm install -D eslint-plugin-prettier
npm run format



## install tailwind
npm install -D tailwindcss @tailwindcss/postcss
add : @import "tailwindcss"; on index.css file 


## install axios and crypto.js
npm install crypto-js
npm i axios 

## install toaster
npm install react-toastify
import { toast } from 'react-toastify';

toast.success('User Registered Successfully!');
toast.error('Something went wrong!');
toast.info('Loading...');
toast.warning('Are you sure?');


Optional Configuration

<ToastContainer 
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
/>





























