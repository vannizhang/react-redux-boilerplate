# React-Redux Boilerplate

The Boilerplate to start React+Redux project with TypeScript in an easier and faster way. 

## Features

- React
- Redux
- TypeScript
- Webpack
- Jest
- Tailwind
- styled-components
- EsLint
- Prettier
- [Esri-Loader](https://github.com/Esri/esri-loader)

## Getting Started

1. Make sure you have a fresh version of [Node.js](https://nodejs.org/en/) and NPM installed. The current Long Term Support (LTS) release is an ideal starting point

2. Clone this repository to your computer: 
    ```sh
    git clone https://github.com/vannizhang/react-redux-boilerplate.git
    ```


3. From the project's root directory, install the required packages (dependencies):

    ```sh
    npm install
    ```

4. To run and test the app on your local machine (http://localhost:8080):

    ```sh
    # it will start a server instance and begin listening for connections from localhost on port 8080
    npm run start
    ```

5. To build/deploye the app, you can run:

    ```sh
    # it will place all files needed for deployment into the /dist directory 
    npm run build
    ```

## Project Structure

```sh
├── public  
    ├── favicon.ico
    ├── index.html              # html template for the app
    ├── thumbnail.jpg           # an image will be used in og:image meta tag
├── src                         # Source code.
    ├── components              # reusable UI components
        ├── ArcGIS              # building blocks for the Map Interface with ArcGIS API for JavaScript (e.g. MapView, Search Widget and tec)
    ├── constants               # app-wide constants (text, URLs, themes and etc)
    ├── contexts                # React contexts
    ├── hooks                   # reusable custome hooks
    ├── pages                   # Page components
    ├── services                # API calls
    ├── static                  # static assets
    ├── store                   # Redux store
        ├── reducers            # reducers to manage app's state
        ├── configureStore.ts
        ├── getPreloadedState.ts 
    ├── styles                  # app-wide styles
    ├── types                   # type definitions
    ├── utils                   # utility functions
    └── index.tsx               # entry point for the app
├── .babelrc
├── .eslintrc.js
├── .prettierrc.js
├── package.json
├── tsconfig.json
├── webpack.config.js
├── tailwind.config.js
├── postcss.config.js
```