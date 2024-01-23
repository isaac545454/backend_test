import { Response } from "express"
import { TypedRequest } from "../types/response"
import { UserSchemaType } from "../types/user"
import { UserService } from "../service/user"

export class UserController {
  async create(
    req: TypedRequest<UserSchemaType>,
    res: Response
  ): Promise<void> {
    const user = new UserService()
    try {
      const responseUser = await user.create(req.body)
      res.status(201).json(responseUser)
    } catch (error) {
      console.error(error)
      res.status(500).send("Internal Server Error")
    }
  }
}
