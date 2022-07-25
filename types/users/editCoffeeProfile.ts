import { GraphQLUpload } from "graphql-upload/GraphQLUpload.js";

export interface EditCoffeeProfileArgs {
  username?: string;
  name?: string;
  location?: string;
  password?: string;
  email?: string;
  githubUsername?: string;
  avatar?: GraphQLUpload;
}
