import client from "../src/client";

export default {
  Query: {
    coffees: () => client.coffee.findMany(),
  },
};
