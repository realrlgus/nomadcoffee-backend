import { Resolvers } from "types/global";

const TAKE = 5;

const resolvers: Resolvers = {
  Query: {
    seeUser: async (_, { username, page }, { client }) => {
      try {
        const isExistUser = await client.coffeeUser.findUnique({
          where: {
            username,
          },
          select: {
            id: true,
          },
        });
        if (!isExistUser) {
          throw Error("User not found");
        }
        const followers = await client.coffeeUser
          .findUnique({
            where: {
              username,
            },
          })
          .followers({
            take: TAKE,
            skip: (page - 1) * TAKE,
          });
        const following = await client.coffeeUser
          .findUnique({
            where: {
              username,
            },
          })
          .following({
            take: TAKE,
            skip: (page - 1) * TAKE,
          });

        return {
          ok: true,
          followers,
          following,
        };
      } catch (e) {
        return {
          ok: false,
          error: e.message,
        };
      }
    },
  },
};

export default resolvers;
