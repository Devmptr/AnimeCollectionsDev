import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
        graphqlErrors.map((message, location, path) => {
            console.log(`Graphql Error! ${message}`);
        });
    }
});

const link = from([
    errorLink,
    new HttpLink({ uri: "https://graphql.anilist.co" }),
]);

const Client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});

export default Client;