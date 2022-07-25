import { Resolvers } from "types/global";
import { SearchUserProps, SearchUserResult } from "types/users/searchUsers";

const resolvers: Resolvers = {
  Query: {
    searchUsers: async (
      _,
      { keyword }: SearchUserProps,
      { client }
    ): Promise<SearchUserResult> => {
      try {
        const searchUser = await client.coffeeUser.findMany({
          where: {
            username: {
              contains: keyword.toLowerCase(),
            },
          },
        });
        return {
          ok: true,
          searchUser,
        };
      } catch (e) {
        return {
          ok: false,
          error: e.message,
          searchUser: [],
        };
      }
    },
  },
};

export default resolvers;
