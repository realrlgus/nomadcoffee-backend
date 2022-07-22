export type CreateAccountProps = {
  username: string;
  email: string;
  name: string;
  location: string;
  password: string;
  avatarURL: string;
  githubUsername: string;
};

export type CreateAccountReturn = {
  ok: boolean;
  error?: string;
};
