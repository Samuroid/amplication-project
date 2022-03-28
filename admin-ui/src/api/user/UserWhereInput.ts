import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ArticleListRelationFilter } from "../article/ArticleListRelationFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  projects?: ArticleListRelationFilter;
  tasks?: TaskListRelationFilter;
  username?: StringFilter;
};
