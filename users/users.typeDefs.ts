import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!
    username: String!
    email: String!
    name: String!
    location: String!
    password: String!
    avatarURL: String!
    githubUsername: String!
  }
  type UserResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createAccount(
      username: String!
      email: String!
      name: String!
      location: String!
      password: String!
      avatarURL: String!
      githubUsername: String!
    ): UserResult
  }
`;
