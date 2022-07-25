import bcrypt from "bcrypt";
import { Resolvers } from "types/global";
import {
  CreateAccountProps,
  CreateAccountReturn,
} from "../../../types/users/createUserAccount";

const resolvers: Resolvers = {
  Mutation: {
    createUserAccount: async (
      _,
      {
        username,
        email,
        name,
        location,
        password,
        avatarURL,
        githubUsername,
      }: CreateAccountProps,
      { client }
    ): Promise<CreateAccountReturn> => {
      try {
        const isExistingUser = await client.coffeeUser.findFirst({
          where: {
            OR: [{ username }, { email }, { githubUsername }],
          },
        });
        if (isExistingUser) {
          throw Error("Already Existing User!");
        }

        const uglyPassword = await bcrypt.hash(password, 10);

        await client.coffeeUser.create({
          data: {
            username,
            email,
            name,
            location,
            password: uglyPassword,
            avatarURL,
            githubUsername,
          },
        });
        return { ok: true };
      } catch (e: any) {
        return {
          ok: false,
          error: e.message,
        };
      }
    },
  },
};

export default resolvers;
