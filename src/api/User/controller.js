import User from './regmodel';
import birth from '../Comman/birthmodel';
import death from '../Comman/deathmodel';
import cast from '../Comman/castmodel';
import pention from '../Comman/pentionmodel';
import ration from '../Comman/rationmodel';
import com from '../Comman/AddComplaintmodel';
import {sendEmail} from '../Comman/email';

export const userLogins = (req, res) => {
	User.findOne( {"UserName":req.query.UserName, "Password":req.query.Password}, (err, result)=> {
    res.send(result);
	})
}

export const create = (req, res) => {
  console.log(req.body);
  User.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } 
       else {
          res.send(result);
        }
      })
    }



export const index = (req, res) => {
  User.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const updateProfile = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const viewProfile = (req, res) => {
  User.find( {"UserName":req.query.UserName}, (err, result)=> {
    res.send(result.map(record => {
      return record;
    }));
  })
}
export const forgotPassword = (req, res) => {
  User.find({"Emailid":req.query.Emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
      result.map(results => {
        const subject = 'Credentials Recived';
        const body = `UserName: ${results.UserName}<br>Password: ${results.Password}<br>Please Login Using these Credentials<br>Thank You.`;
        sendEmail(req.query.Emailid, subject, body);
      })      
      res.send(result);
    }
  })
}

//Complaints

export const Addcomplaint = (req, res) => {
  com.create(req.body, (err, result) => {
    console.log(req.body);
    if (err) {
      res.send(err);
    } else {
          res.send(result);
        }
      })

}



export const indexcom = (req, res) => {
  com.find({"UserName":req.query.UserName}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

//birth
export const createbirth = (req, res) => {
  birth.create(req.body, (err, result) => {
    console.log(req.body);
    if (err) {
      res.send(err);
    } else {
      const subject = 'Birth Application Details';
      const body = `You Applied for Birth Certificate <br>Status: ${req.body.status}<br>Your Application is Pending at District Officer Department<br>Thank You.`;
      sendEmail(req.body.Emailid, subject, body);
      res.send(result);
    }
  })
}


export const indexbirth = (req, res) => {
  birth.find({"UserName":req.query.UserName}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}


//Death
export const createdeath = (req, res) => {
  death.create(req.body, (err, result) => {
  
    if (err) {
      res.send(err);
    } 
         else {
          const subject = 'Death Application Details';
      const body = `You Applied for Death Certificate <br>Status: ${req.body.status}<br>Your Application is Pending at District Officer Department<br>Thank You.`;
      sendEmail(req.body.Emailid, subject, body);
      res.send(result);
    
    }
  })
}


export const indexdeath = (req, res) => {
  death.find({"UserName":req.query.UserName}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}


//Pention
export const createpention = (req, res) => {
  pention.create(req.body, (err, result) => {
    console.log(req.body);
    if (err) {
      res.send(err);
    }  else {
      const subject = 'Pension Application Details';
      const body = `You Applied for Pention<br>ApplicationNo: ${req.body.ApplicationNo}<br>Status: ${req.body.status}<br>Your Application is Pending at District Officer Department<br>Thank You.`;
      sendEmail(req.body.Emailid, subject, body);
      res.send(result);
        }
      })
    }




export const indexpention = (req, res) => {
  pention.find({"UserName":req.query.UserName}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      
      res.send(results);
    }
  })
}
//Ration 
export const createration = (req, res) => {
  ration.create(req.body, (err, result) => {
  
    if (err) {
      res.send(err);
    } 
         else {
          const subject = 'Ration Application Details';
      const body = `You Applied for Ration Card<br>ApplicationNo: ${req.body.ApplicationNo}<br>Status: ${req.body.status}<br>Your Application is Pending at District Officer Department<br>Thank You.`;
      sendEmail(req.body.Emailid, subject, body);
      res.send(result);
        }
      })
  
}


export const indexration = (req, res) => {
  ration.find({"UserName":req.query.UserName}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
//cast
export const createcast = (req, res) => {
  cast.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Caste Application Details';
      const body = `You Applied for Caste Certificate <br>ApplicationNo: ${req.body.ApplicationNo}<br>Status: ${req.body.status}<br>Your Application is Pending at District Officer Department<br>Thank You.`;
      sendEmail(req.body.Emailid, subject, body);
      res.send(result);
    }
  })
}


export const indexcast = (req, res) => {
  cast.find({"UserName":req.query.UserName},(err, officer) => {
    if (err) {
      res.send(err);
    } else {
      res.send(officer);
    }
  })
} 