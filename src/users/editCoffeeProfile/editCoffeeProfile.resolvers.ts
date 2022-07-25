import bcrypt from "bcrypt";
import { createWriteStream } from "fs";
import { DefaultReturn, Resolvers } from "types/global";
import { EditCoffeeProfileArgs } from "types/users/editCoffeeProfile";
import { protectedResolver } from "../users.utils";

const resolvers: Resolvers = {
  Mutation: {
    editCoffeeProfile: protectedResolver(
      async (
        _,
        {
          username,
          email,
          password,
          name,
          location,
          githubUsername,
          avatar,
        }: EditCoffeeProfileArgs,
        { loggedInUser, client }
      ): Promise<DefaultReturn> => {
        try {
          let avatarUrl = null;
          if (avatar) {
            const {
              file: { createReadStream, filename },
            } = await avatar;
            const currentDirectory = process.cwd();
            const newFileName = `${loggedInUser.id}${Date.now()}${filename}`;
            const readStream = createReadStream();
            const writeStream = createWriteStream(
              `${currentDirectory}/uploads/${newFileName}`
            );
            readStream.pipe(writeStream);
            avatarUrl = `http://localhost:${process.env.PORT}/static/${newFileName}`;
          }

          const uglyPassword =
            password && (await bcrypt.hash(password as string, 10));
          await client.coffeeUser.update({
            where: {
              id: loggedInUser.id,
            },
            data: {
              name,
              location,
              username,
              email,
              githubUsername,
              password: uglyPassword,
              ...(avatar && { avatar: avatarUrl }),
            },
          });
          return {
            ok: true,
          };
        } catch (e: any) {
          return {
            ok: false,
            error: e.message,
          };
        }
      }
    ),
  },
};

export default resolvers;
