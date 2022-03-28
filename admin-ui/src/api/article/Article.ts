import { User } from "../user/User";

export type Article = {
  author?: User | null;
  content: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  title: string;
  updatedAt: Date;
};
