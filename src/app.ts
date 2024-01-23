import express, { Request, Response } from "express"
import { userSchema } from "./schemas/user"
import { validateSchema } from "./validation"
import { UserSchemaType } from "./types/user"
import { UserController } from "./controller/User"

const app = express()
const port = 3000

app.use(express.json())

app.post("/", validateSchema(userSchema), new UserController().create)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
