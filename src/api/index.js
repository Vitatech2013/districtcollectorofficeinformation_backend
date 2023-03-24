import { Router } from 'express'
 import admin from './Admin'
import user from './User'
import employee from './Employee'



const router = new Router()


router.use('/user', user)

router.use('/admin', admin)

 router.use('/employee', employee)

export default router
