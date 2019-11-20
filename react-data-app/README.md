This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React with GraphQL data

## Task

I have set up a single page application using React that consumes data via a GraphQL endpoint and displays the response on screen.
The data will come in the form of an array of Pokemons, these should be displayed as a list and each one should be clickable to redirect the user to another page with more details about the item selected.

## Technical details

The GraphQL endpoint that we are using for this example is located here: `https://graphql-pokemon.now.sh/graphql`  
The schema can be explored here: https://graphql-pokemon.now.sh

The project should be executed with the following commands:

`npm install` for project dependencies.  
`npm start` for a local development preview.  
`npm run test` for local unit testing which must pass.

I am using GraphQL connectivity tool [Apollo](https://www.apollographql.com)

### Styling

    As this is a small project and because of time constrains the CSS used here is not  great for scalability, given more time I would have used something like Styled Components or CSS Modules.

### What I enjoyed.

    I had never used GraphQL, React Router or Apollo before, I found the documentation very straight forward with lots of easy to follow examples online, I was surprised to see how easy it was to use GraphQL which also made the project enjoyable.

### The building processed

    I tried to commit as often as possible to show the steps I was taking and tried to describe in the commit my understanding of the process.

### Testing

    I was debating between what framework to use and how to pick the best tool for the job,I ended up going for React Testing Library, I could have probably used more tests scenarios but again because of timing couldn't be completed.

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
