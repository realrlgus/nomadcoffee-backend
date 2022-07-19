require("dotenv").config();
import { ApolloServer } from "apollo-server";
import schema from "./schema";

const PORT = process.env.PORT;

const server = new ApolloServer({
  schema,
});

server
  .listen()
  .then(() => console.log(`Listening to: http://localhost:${PORT}`));
