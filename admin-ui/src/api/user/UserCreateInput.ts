import { ArticleCreateNestedManyWithoutUsersInput } from "./ArticleCreateNestedManyWithoutUsersInput";
import { TaskCreateNestedManyWithoutUsersInput } from "./TaskCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  articles?: ArticleCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  tasks?: TaskCreateNestedManyWithoutUsersInput;
  username: string;
};
