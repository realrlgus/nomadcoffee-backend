import client from "../src/client";

export default {
  Mutation: {
    createCoffee: (_: undefined, { title }: { title: string }) =>
      client.coffee.create({ data: { title } }),
  },
};
