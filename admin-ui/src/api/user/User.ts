import { Article } from "../article/Article";
import { Task } from "../task/Task";

export type User = {
  articles?: Array<Article>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  tasks?: Array<Task>;
  updatedAt: Date;
  username: string;
};
