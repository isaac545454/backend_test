import { UserSchemaType } from "../types/user"

export class UserService {
  create({ email, password, username }: UserSchemaType): UserSchemaType {
    return { email, password, username }
  }
}
