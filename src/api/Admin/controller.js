import emp from '../Comman/empmodel';
import castt from '../Comman/castmodel';
import birthh from '../Comman/birthmodel';
import deathh from '../Comman/deathmodel';
import pentionn from '../Comman/pentionmodel';
import rationn from '../Comman/rationmodel';
import AdminLogin from './adminmodel';
import {sendEmail} from '../Comman/email';

export const adminlogin = (req, res) => {
  AdminLogin.findOne({"UserName":req.query.UserName,"Password":req.query.Password }, (err, result) => {
      res.send(result);
  })
}
export const createemp = (req, res) => {
  emp.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Registration Details';
      const body = `You Registed District Collector Office as a Employee<br>UserName: ${req.body.EmployeeName}<br>YourPassword: ${req.body.Password}<br>Please Login Using these Credentials<br>Thank You.`;
      sendEmail(req.body.Emailid, subject, body);
      res.send(result);
    }
  })
}


export const indexemp = (req, res) => {
  emp.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const destroy = (req, res) => {
  emp.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      emp.find({}, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.send(results);
        }
      })
    }
  })
}
export const forgotPassword = (req, res) => {
  AdminLogin.find({"Emailid":req.query.Emailid}, (err, result) => {
   
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
export const indexcast = (req, res) => {
  castt.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const indexbirth = (req, res) => {
  birthh.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const indexdeath = (req, res) => {
  deathh.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const indexpention = (req, res) => {
  pentionn.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const indexration = (req, res) => {
  rationn.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const createadmin = (req, res) => {
  AdminLogin.create(req.body, (err, result) => {
    console.log(req.body);
    if (err) {
      res.send(err);
    } else {
      AdminLogin.find((err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      })
    }
  })
}

export const updateadminProfile = (req, res) => {
  AdminLogin.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}





