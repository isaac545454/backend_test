import { z } from "zod"
import { ValidatorProps } from "../validation"

export const userSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6),
})

export const RequestTest: ValidatorProps = z.object({
  body: userSchema,
})
