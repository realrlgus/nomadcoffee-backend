import client from "../src/client";
import bcrypt from "bcrypt";

type CreateAccountProps = {
  username: string;
  email: string;
  name: string;
  location: string;
  password: string;
  avatarURL: string;
  githubUsername: string;
};

type CreateAccountReturn = {
  ok: boolean;
  error?: string;
};

export default {
  Mutations: {
    createAccount: async (
      _: undefined,
      {
        username,
        email,
        name,
        location,
        password,
        avatarURL,
        githubUsername,
      }: CreateAccountProps
    ): Promise<CreateAccountReturn> => {
      try {
        const isExistingUser = await client.user.findFirst({
          where: {
            OR: [{ username }, { email }, { githubUsername }],
          },
        });
        if (isExistingUser) {
          throw Error("Already Existing User!");
        }

        const uglyPassword = await bcrypt.hash(password, 10);

        await client.user.create({
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
