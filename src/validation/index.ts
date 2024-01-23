import { Request, Response, NextFunction } from "express"
import { AnyZodObject, ZodError } from "zod"

export const validateSchema = (schema: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body)
      next()
    } catch (error) {
      const zodError = error as ZodError
      res.status(400).json({ error: zodError.errors })
    }
  }
}
