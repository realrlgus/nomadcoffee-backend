import { CoffeeUser } from "@prisma/client";
import { DefaultReturn } from "types/global";

export interface SearchUserProps {
  keyword: string;
}
export interface SearchUserResult extends DefaultReturn {
  searchUser: CoffeeUser[];
}
