import { StringFilter } from "../../util/StringFilter";

export type ArticleWhereInput = {
  content?: StringFilter;
  id?: StringFilter;
  shortDescription?: StringFilter;
  title?: StringFilter;
};
