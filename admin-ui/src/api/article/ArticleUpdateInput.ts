import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ArticleUpdateInput = {
  author?: UserWhereUniqueInput | null;
  content?: string | null;
  description?: string | null;
  title?: string;
};
