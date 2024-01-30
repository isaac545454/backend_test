import { Response } from "express"
import { TypedRequest } from "../types/response"
import { UserSchemaType } from "../types/user"
import { UserService } from "../service/user"

type Params = {
  userId: string
}

type Query = {
  role: string
}
export class UserController {
  async create(
    req: TypedRequest<UserSchemaType, Params, Query>,
    res: Response
  ): Promise<void> {
    try {
      const user = new UserService()

      const responseUser = await user.create(req.body)
      res.status(201).json(responseUser)
    } catch (error) {
      console.error(error)

      res.status(500).send("Internal Server Error")
    }
  }
}
