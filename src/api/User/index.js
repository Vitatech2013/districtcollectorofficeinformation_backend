import { Router } from 'express'

import {
  create,
  createbirth,
  createdeath,
  createration,
  createpention,
  createcast,
  Addcomplaint,
  index,
  show,
  indexbirth,
  indexcast,
  indexdeath,
  indexpention,
  indexration,
  viewProfile,
  
  userLogins,
  indexcom,
  forgotPassword,
updateProfile,
} from './controller'

const router = new Router()

router.post('/', create)
router.post('/birth', createbirth)
router.post('/death', createdeath)
router.post('/ration', createration)
router.post('/pention', createpention)
router.post('/cast', createcast)
router.post('/Addcomplaint', Addcomplaint)
router.get('/userlogin', userLogins)
router.get('/viewration', indexration)
router.get('/viewdeath', indexdeath)
router.get('/viewpention', indexpention)

router.get('/viewcomple', indexcom)
router.get('/viewbirth', indexbirth)
router.get('/viewcast', indexcast)
router.get('/viewprofile', viewProfile)
router.get('/', index)
router.put('/updateprofile/:id', updateProfile)
router.get('/forgotPassword', forgotPassword)

export default router
