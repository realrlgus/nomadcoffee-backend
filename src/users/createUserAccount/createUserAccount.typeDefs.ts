import { gql } from "apollo-server";

export default gql`
  type UserResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createUserAccount(
      username: String!
      email: String!
      name: String!
      location: String!
      password: String!
      avatarURL: String
      githubUsername: String!
    ): UserResult
  }
`;
