import { Router } from 'express'

import {
  viewcomplaints,
  indexcastt,
  indexbirthh,
  indexdeathh,
  indexpentionn,
  indexrationn,
  updatestatus,
  updatestatusdeath,
  updatestatusbirth,
  updatestatuspention,
  updatestatusration,
  empviewProfile,
  empupdateProfile,
  emplogins,forgotPassword

 
} from './controller'

const router = new Router()

router.get('/emplogin', emplogins)

router.get('/viwcomplaints', viewcomplaints)
router.get('/empcastvieww', indexcastt)
router.get('/forgotPassword', forgotPassword)
router.get('/empbirthvieww', indexbirthh)
router.get('/empdeathvieww', indexdeathh)
router.get('/emppentionvieww',indexpentionn)
router.get('/emprationvieww',indexrationn)
router.get('/empviewprofile', empviewProfile)

router.put('/empupdateprofile/:id', empupdateProfile)
 router.put('/caststatus/:id',updatestatus)
 router.put('/rationstatus/:id',updatestatusration)
 router.put('/pentionstatus/:id',updatestatuspention)
 router.put('/deathstatus/:id',updatestatusdeath)
 router.put('/birthstatus/:id',updatestatusbirth)
export default router

