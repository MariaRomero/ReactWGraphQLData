import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import { onError } from "apollo-link-error";

export const dataObj = () => {
  const cache = new InMemoryCache();
  const httpLink = new HttpLink({
    uri: "https://graphql-pokemon.now.shs/"
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const link = errorLink.concat(httpLink);

  return {
    cache,
    link
  };
};
