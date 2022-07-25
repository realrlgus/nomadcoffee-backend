import { CoffeeUser } from "@prisma/client";
import { DefaultReturn } from "types/global";

export interface SeeUserProps {
  username: string;
  page: number;
}

export interface SeeUserReturn extends DefaultReturn {
  followers: CoffeeUser[];
  following: CoffeeUser[];
}
