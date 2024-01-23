import { z } from "zod"
import { userSchema } from "../schemas/user"

export type UserSchemaType = z.infer<typeof userSchema>
