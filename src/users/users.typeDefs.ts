import { gql } from "apollo-server";

export default gql`
  type CoffeeUser {
    id: Int!
    username: String!
    email: String!
    name: String!
    location: String!
    password: String!
    avatarURL: String!
    githubUsername: String!
  }
`;
