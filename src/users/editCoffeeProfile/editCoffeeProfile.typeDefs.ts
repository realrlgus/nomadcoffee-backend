import { gql } from "apollo-server";

export default gql`
  scalar Upload
  type EditCoffeeProfileResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    editCoffeeProfile(
      username: String
      name: String
      location: String
      email: String
      password: String
      githubUsername: String
      avatar: Upload
    ): EditCoffeeProfileResult!
  }
`;
