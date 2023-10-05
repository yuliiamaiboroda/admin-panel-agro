# Dynamic Content Management React App

Welcome to our Dynamic Content Management React App! This application is built
using TypeScript, Styled Components, React Router DOM, and Redux. It allows
users to edit and create dynamic content for vacancies, services, and products.
Additionally, users can provide feedback and submit resumes through interactions
with the backend.

## Features

- **Dynamic Content Editing:** Users can easily edit and create dynamic content
  for vacancies, services, and products using intuitive interfaces.
- **Feedback System:** Users can provide feedback about the services and
  products offered on the site.
- **Resume Submission:** Job seekers can submit their resumes directly through
  the website for job openings.
- **Backend Interaction:** The app interacts seamlessly with the backend
  services to store and retrieve data.

## Tech

- [React](https://reactjs.org/) - JavaScript library for building user
  interfaces
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that
  adds static types to the language
- [Styled Components](https://styled-components.com/docs) A CSS-in-JS library
  for styling React components.
- [React Router DOM](https://reactrouter.com/en/main) Declarative routing for
  React.js applications.
- [Redux](https://redux-toolkit.js.org/) A predictable state container for
  JavaScript apps, used for managing the application state.

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

## Prerequisites

- Node.js and npm installed on your machine.

## Installing

- Clone the repository:

```sh
gh repo clone yuliiamaiboroda/admin-panel-agro
```

- Change into the project directory:

```sh
cd admin-panel-agro
```

- Install dependencies:

```sh
npm install
```

- Start the development server:

```sh
npm start
```

-Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Folder Structure

The project structure is organized as follows:

- `src/`
  - `assets/` - This directory stores static assets such as images.
  - `components/` - This directory houses reusable React components used
    throughout the application.
    - `Component/` - An individual component's folder, containing the following
      files:
      - `Component.styled.ts` - Styled-components file for defining
        component-specific styles.
      - `Component.tsx` - The React component file, containing the component's
        logic and structure.
      - `index.ts` - An index file that exports the component.
  - `helpers/` - This directory contains utility files, constants, schemas,
    types, and styles used throughout the application.
    - `constants/` - Constants such as error messages, user roles, vacancy
      categories enums.
    - `schemas/` - JSON schemas and validation logic.
    - `types/` - TypeScript type definitions for data structures.
    - `styles/` - Universal styles for the most repetitive elements.
  - `hooks/` - Custom React hooks used in the application are stored here.
  - `pages/` - Pages represent different views/routes of the application.
    - `Page/`
      - `Page.styled.ts`
      - `Page.tsx`
      - `index.ts`
  - `redux/` - Redux-related files, including actions, reducers, and store
    configuration.
  - `utils/` - Utility functions and helper classes used across the application.
  - `App.tsx` - The main application component file, where the root component
    and application-level logic are defined. The entry point of the React
    application.
  - `index.tsx` - The entry file of the application, where the React app is
    rendered into the DOM.

## Other commands

**Start the server in production mode.**

```sh
npm run build
```

**Start the server in development mode.**

```sh
npm start
```

**Run eslint code checks. This should be done before each PR, and all linting
errors must be fixed.**

```sh
npm run lint
```

**Launches the test runner in the interactive watch mode.**

```sh
npm test
```

**Remove the single build dependency from your project.**

**!Note: this is a one-way operation. Once you `eject`, you can’t go back!**

```sh
npm run eject
```

_If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project._

_Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own._

_You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it._

## License

MIT

---
