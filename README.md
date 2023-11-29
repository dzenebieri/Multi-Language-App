# npm install

npm install react-i18next i18next i18next-http-backend i18next-browser-languagedetector js-cookie
to run app

# npm start

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# GitHub Pages

npm install gh-pages --save-dev

# package.json

+ "homepage": "https://username.github.io/Repo-Name",
  "name": "Repo Name",

"scripts": {
  + "predeploy": "npm run build",
  + "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
  },

# Terminal

git init
git remote add origin https://github.com/username/Repo-Name.git
npm run deploy
