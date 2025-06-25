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

5.run eslint in any of your file
npx eslint yourfile.js

6.now we will configure prettier
