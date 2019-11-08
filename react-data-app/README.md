This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# React with GraphQL data

This example assumes that you have a basic understanding of the React library and is intended to probe your knowledge of component structure, routing, GraphQL calls, simple styling and testing methods.
You should aim to spend approximately 3 hours on this exercise.

## Task

We are going to set up a single page React application that consumes data via a GraphQL endpoint and displays that data on the page using components.
The data will come in the form of a list of Pokemon, these should be displayed as a list and each one should click through to an individual Pokemon stats view.

## Technical details

The GraphQL endpoint that we are using for this example is located here: `https://graphql-pokemon.now.sh/graphql`  
The schema can be explored here: https://graphql-pokemon.now.sh

The project should be executed with the following commands:

`npm install` for project dependencies.  
`npm start` for a local development preview.  
`npm run test` for local unit testing which must pass.

I would recommend using a toolchain such as https://github.com/facebook/create-react-app as this exercise is not designed to test your build configuration knowledge. Feel free to use an established GraphQL connectivity tool such as [Apollo](https://www.apollographql.com) or [Relay](https://facebook.github.io/relay).

## Acceptance criteria

- The list should contain all 151 Pokemon.
- The list should display:
  - A small `image` of the Pokemon
  - The Pokemon's `number`
  - The Pokemon's `name`
- The detail view should display:
  - A larger `image` of the Pokemon
  - The Pokemon's `number`
  - The Pokemon's `name`
  - A list of that Pokemon's `types`
  - A list of what that Pokemon is `resistant` to
  - A list of that Pokemon's `weaknesses`
- Any unit tests included should pass
- Each Pokemon should have it's own unique URL

## Stories

### Application entry

    As a user
    When I land on the entry point of the application
    A list of Pokemon should be displayed

    As a user
    When I land on a specific entity in the application
    A single Pokemon should be displayed

### Navigation

    As a user
    When I click on a Pokemon
    I should see a single details view of that Pokemon's information

    As a user
    When I click back after navigating to a Pokemon
    I should be returned to the Pokemon list view

### Performance

    As a developer
    When I load a page in my application
    I should only include the minimum data required for the display of that page
