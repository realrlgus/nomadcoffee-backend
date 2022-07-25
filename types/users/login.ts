import { DefaultReturn } from "types/global";

export interface LoginProps {
  username: string;
  password: string;
}

export interface LoginReturn extends DefaultReturn {
  token?: string;
}
