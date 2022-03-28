import { ArticleUpdateManyWithoutUsersInput } from "./ArticleUpdateManyWithoutUsersInput";
import { TaskUpdateManyWithoutUsersInput } from "./TaskUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  articles?: ArticleUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  tasks?: TaskUpdateManyWithoutUsersInput;
  username?: string;
};
