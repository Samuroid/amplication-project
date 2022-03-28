import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ArticleCreateInput = {
  author?: UserWhereUniqueInput | null;
  content?: string | null;
  description?: string | null;
  title: string;
};
