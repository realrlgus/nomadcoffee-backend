import { Resolvers } from "src/types";

const resolvers: Resolvers = {
  Query: {
    seeProfile: (_, { username }, { client }) =>
      client.coffeeUser.findUnique({
        where: {
          username,
        },
      }),
  },
};
export default resolvers;
