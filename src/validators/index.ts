import { Schema } from 'joi'
import { Context, Next } from 'koa'
import HttpStatus from 'http-status'

export const createJoiMiddleware =
  (schema: Schema) => async (ctx: Context, next: Next) => {
    try {
      await schema.validateAsync(ctx.request.body)
      next()
    } catch (e: unknown) {
      ctx.status = HttpStatus.BAD_REQUEST
      ctx.body = { error: String(e) }
    }
  }
