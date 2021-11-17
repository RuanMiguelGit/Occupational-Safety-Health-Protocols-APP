
import { Router } from 'express'
export const userRouter = Router();

import { getUsers } from '../controllers/user'

userRouter.get('/users', getUsers )



