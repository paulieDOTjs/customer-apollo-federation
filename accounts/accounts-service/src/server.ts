import { ApolloServer } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import {} from "graphql-tools";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

const port = 4001;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}graphql`);
});

// TODO cust by username
