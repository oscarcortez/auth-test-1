// import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
// import { PostService } from './posts.service'
// import { Post, NewPost, UpdatePost } from 'src/graphql'

import { Resolver, Query, Args } from '@nestjs/graphql'
import { UserService } from './user.service'
import { User, FindManyUserArgs } from '../shared/prismagraphql/user'
// import { User as UserModel } from '@prisma/client'

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  // @Query('user')
  // async getUser(@Args('id') id: string) {
  //   return this.userService.user({ id: Number(id) })
  // }

  @Query(() => [User])
  async users(@Args() args: FindManyUserArgs) {
    return this.userService.users(args)
  }

  // @Mutation('createUser')
  // async createUser(@Args('data') data: any) {
  //   return this.userService.createUser(data)
  // }

  // @Mutation('updateUser')
  // async updateUser(@Args('data') data: any) {
  //   return this.userService.updateUser(data)
  // }

  // @Mutation('deleteUser')
  // async deleteUser(@Args('id') id: string) {
  //   return this.userService.deleteUser({ id: Number(id) })
  // }
}
