import { Request } from "express"

interface TypedParamsDictionary {
  [key: string]: string
}

export type TypedRequest<
  TBody,
  TParams = any,
  Tquery = TypedParamsDictionary
> = Request<{}, {}, TBody> & {
  params: TParams
  query: Tquery
}
