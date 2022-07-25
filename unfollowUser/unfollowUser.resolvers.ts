import { protectedResolver } from "src/users/users.utils";
import { DefaultReturn, Resolvers } from "types/global";
import { UnfollowUserProps } from "types/users/unfollowUser";

const resolvers: Resolvers = {
  Mutation: {
    followUser: protectedResolver(
      async (
        _,
        { username }: UnfollowUserProps,
        { client, loggedInUser }
      ): Promise<DefaultReturn> => {
        try {
          const isUserExist = await client.coffeeUser.findUnique({
            where: {
              username,
            },
          });
          if (!isUserExist) {
            throw Error("사용자가 존재하지 않습니다.");
          }
          await client.coffeeUser.update({
            where: {
              id: loggedInUser.id,
            },
            data: {
              following: {
                disconnect: {
                  username,
                },
              },
            },
          });
          return {
            ok: true,
          };
        } catch (e) {
          return {
            ok: true,
            error: e.message,
          };
        }
      }
    ),
  },
};

export default resolvers;
