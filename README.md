# power-trip-web

https://power-trip-web.vercel.app/
https://power-trip-web-scrhz.vercel.app/
https://power-trip-web-git-main-scrhz.vercel.app/

This website project was intended as a learning exercise in the fundamentals of front-end web development through NextJS/React, whilst also providing a practical home to list freelance audio services.

It has been a conscious decision throughout to build from the ground up & avoid additional libraries where practical, hence the omission of CSS preprocessors or UI templates.

## Building the client:

1. Make sure you have `node` v18 or higher installed and in your $PATH.
2. Run `npm install` from the repo root to install dependencies.
3. Run `npm run dev` to build & run the site locally with hot-reloading.

## Running tests:

1. Make sure the above steps have been run to install dependencies.
2. Run `npx playwright test` to run the e2e tests.

## Preparing the CMS

This project relies on a specific private Contentful space to serve products for the Audio Hire page.

For obvious security reasons the required environment variables to access this space have not been included in the repository.

To view this section of the site on a local build, the project is expecting the following local environment variables (e.g. in a `.env` file at the root of the project):

-   `CONTENTFUL_SPACE_ID`
-   `CONTENTFUL_ACCESS_TOKEN`
-   `CONTENTFUL_PREVIEW` (boolean flag, set to false as standard)
-   `CONTENTFUL_ENVIRONMENT` (develop or main)
