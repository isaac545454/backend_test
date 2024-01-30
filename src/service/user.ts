import { UserSchemaType } from "../types/user"
import { PRISMA_CLIENT } from "../PRISMA_CLIENT"

export class UserService {
  async create(user: UserSchemaType): Promise<UserSchemaType> {
    return user
  }
}
