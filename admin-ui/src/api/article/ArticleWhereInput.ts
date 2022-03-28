import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ArticleWhereInput = {
  author?: UserWhereUniqueInput;
  content?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringFilter;
};
