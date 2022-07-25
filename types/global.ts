import { CoffeeUser, PrismaClient } from "@prisma/client";

interface Context {
  client: PrismaClient;
  loggedInUser: CoffeeUser;
}

export interface DefaultReturn {
  ok: Boolean;
  error?: String;
}

export interface Resolver {
  (root: any, args: any, context: Context, info: any): any;
}

export interface Resolvers {
  [key: string]: {
    [key: string]: Resolver;
  };
}
