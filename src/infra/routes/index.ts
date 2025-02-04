import { Router } from 'express'
import { createUserRoutes } from './create-user-routes'

const router = Router()

router.use('/v1', createUserRoutes)

export { router }