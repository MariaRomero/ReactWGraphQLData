This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React with GraphQL data

## Task

I have set up a single page React application that consumes data via a GraphQL endpoint and displays that data on the page using components.
The data will come in the form of a list of Pokemon, these should be displayed as a list and each one should click to select an individual Pokemon stats view next to the list.

## Technical details

The GraphQL endpoint that we are using for this example is located here: `https://graphql-pokemon.now.sh/graphql`  
The schema can be explored here: https://graphql-pokemon.now.sh

The project should be executed with the following commands:

`npm install` for project dependencies.  
`npm start` for a local development preview.  
`npm run test` for local unit testing which must pass.

I am using GraphQL connectivity tool [Apollo](https://www.apollographql.com)

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

I have achived the below AC with one twist I didn't make the user navigate to a different page, I'm displaying the detail view on the same page

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
