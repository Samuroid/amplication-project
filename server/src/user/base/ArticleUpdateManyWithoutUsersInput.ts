/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ArticleWhereUniqueInput } from "../../article/base/ArticleWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class ArticleUpdateManyWithoutUsersInput {
  @Field(() => [ArticleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ArticleWhereUniqueInput],
  })
  connect?: Array<ArticleWhereUniqueInput>;

  @Field(() => [ArticleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ArticleWhereUniqueInput],
  })
  disconnect?: Array<ArticleWhereUniqueInput>;

  @Field(() => [ArticleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ArticleWhereUniqueInput],
  })
  set?: Array<ArticleWhereUniqueInput>;
}
export { ArticleUpdateManyWithoutUsersInput };