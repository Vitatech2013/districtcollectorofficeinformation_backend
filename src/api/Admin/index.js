import { Router } from 'express'

import {

 createadmin,
  createemp,
  indexemp,
  indexcast,
  indexbirth,
  indexdeath,
  indexpention,
  indexration,
  adminlogin,
  destroy,
  forgotPassword,
  updateadminProfile

  
} from './controller'

const router = new Router()

router.get('/adminlogin', adminlogin)
router.post('/',createadmin)
router.post('/empreg',createemp)
router.get('/officerforgotPassword', forgotPassword)
router.get('/empreg', indexemp)
router.get('/castview', indexcast)
router.get('/birthview', indexbirth)
router.get('/deathview', indexdeath)
router.get('/pentionview',indexpention)
router.get('/rationview',indexration)
router.put('/updateAdminProfile/:id', updateadminProfile)
router.delete('/empdel/:id', destroy)
export default router
