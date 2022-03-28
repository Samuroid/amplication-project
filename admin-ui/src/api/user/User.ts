import { Article } from "../article/Article";
import { Task } from "../task/Task";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  projects?: Array<Article>;
  roles: Array<string>;
  tasks?: Array<Task>;
  updatedAt: Date;
  username: string;
};
