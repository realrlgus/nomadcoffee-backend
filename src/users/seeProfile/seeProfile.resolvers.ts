import { Resolvers } from "types/global";
import { Username } from "types/users/seeProfile";
import { User } from "types/users/users";

const resolvers: Resolvers = {
  Query: {
    seeProfile: (_, { username }: Username, { client }): Promise<User> =>
      client.coffeeUser.findUnique({
        where: {
          username,
        },
      }),
  },
};
export default resolvers;
