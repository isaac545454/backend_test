import { Request, Response, NextFunction } from "express"
import { AnyZodObject, ZodError, ZodObject } from "zod"

export type ValidatorProps = ZodObject<{
  body?: AnyZodObject
  params?: AnyZodObject
  query?: AnyZodObject
}>

export const requestValidator = (schema: ValidatorProps) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      next()
    } catch (error) {
      const zodError = error as ZodError
      res.status(400).json({ error: zodError.errors })
    }
  }
}
