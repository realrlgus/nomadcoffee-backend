import { gql } from "apollo-server";

export default gql`
  type Query {
    coffees: [Coffee]
  }
  type Coffee {
    id: Int!
    title: String!
  }
  type Mutation {
    createCoffee(title: String): Coffee
  }
`;
