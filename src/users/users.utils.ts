import { Resolver } from "src/types";

export const protectedResolver =
  (ourResolver): Resolver =>
  (root, args, context, info) => {
    console.log(123);

    return ourResolver(root, args, context, info);
  };
