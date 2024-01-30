import express, { Response } from "express"
import { RequestTest, userSchema } from "./schemas/user"
import { requestValidator } from "./validation"
import { UserController } from "./controller/User"
import { TypedRequest } from "./types/response"
import { UserSchemaType } from "./types/user"

const app = express()
const port = 3000

app.use(express.json())

app.post(
  "/",
  requestValidator(RequestTest),
  (req: TypedRequest<UserSchemaType>, res: Response) => {
    const { email, password, username } = req.body
    return res.json({ email, password, username })
  }
)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
