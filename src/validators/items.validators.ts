import Joi from 'joi'

import { createJoiMiddleware } from '~/validators'
import { MAX_ITEM_QUANTITY } from '~/constants/items.constants'
import { MAX_NUMBER_ERROR, NAME_REQUIRED_ERROR } from '~/errors/items.errors'

const schema = Joi.object({
  name: Joi.string().required().error(new Error(NAME_REQUIRED_ERROR)),
  quantity: Joi.number()
    .max(MAX_ITEM_QUANTITY)
    .error(new Error(MAX_NUMBER_ERROR))
})

export default createJoiMiddleware(schema)
