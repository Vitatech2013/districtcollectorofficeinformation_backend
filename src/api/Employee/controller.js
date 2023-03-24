import empreg from '../Comman/empmodel';
import empcast from '../Comman/castmodel';
import empbirth from '../Comman/birthmodel';
import empdeath from '../Comman/deathmodel';
import emppention from '../Comman/pentionmodel';
import empration from '../Comman/rationmodel';
import com from '../Comman/AddComplaintmodel'
import { sendEmail } from '../Comman/email';

export const emplogins = (req, res) => {
  console.log(req.query.EmployeeName)
  empreg.findOne({ "EmployeeName": req.query.EmployeeName, "Password": req.query.Password }, (err, result) => {
    res.send(result);
  })
}

export const viewcomplaints = (req, res) => {

  com.find((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
export const empupdateProfile = (req, res) => {
  empreg.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}
export const forgotPassword = (req, res) => {
  empreg.find({"Emailid":req.query.Emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
      result.map(results => {
        const subject = 'Credentials Recived';
        const body = `EmployeeName: ${results.EmployeeName}<br>Password: ${results.Password}<br>Please Login Using these Credentials<br>Thank You.`;
        sendEmail(req.query.Emailid, subject, body);
      })      
      res.send(result);
    }
  })
}
export const empviewProfile = (req, res) => {
  console.log(req.query.EmployeeName);
  empreg.find({ "EmployeeName": req.query.EmployeeName }, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
  })
}


export const indexcastt = (req, res) => {
  empcast.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const updatestatus = (req, res) => {
  empcast.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      const subject = 'Caste Application Updated';
      const body = `Your Caste Certificate is Updated<br>ApplicationNo: ${req.body.ApplicationNo}<br>status: ${req.body.status}<br>Please Collect the Caste Certificate at District Officer Department<br>Thank You.`;
      sendEmail(req.body.Emailid, subject, body);
      res.send(result);
    }
  })
}


export const updatestatusdeath = (req, res) => {
  empdeath.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    } else {

      const subject = 'Death Application Updated';
      const body = `Your Death Certificate is Updated<br>Status: ${req.body.status}<br>Please Collect the Death Certificate at District Officer Department<br>Thank You.`;
      sendEmail(req.body.Emailid, subject, body);
    }
  })
}
export const updatestatusration = (req, res) => {
  empration.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Ration Application Updated';
      const body = `Your Ration Card is Updated<br>ApplicationNo: ${req.body.ApplicationNo}<br>Status: ${req.body.status}<br>Please Collect the Ration Card at District Officer Department<br>Thank You.`;
      sendEmail(req.body.Emailid, subject, body);
      res.send(result);
    }
  })
}


export const updatestatuspention = (req, res) => {
  emppention.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Pension Application Updated';
      const body = `Your Pension Certificate is Updated<br>ApplicationNo: ${req.body.ApplicationNo}<br>Status: ${req.body.status}<br>Please Collect the Pension Certificate at District Officer Department<br>Thank You.`;
      sendEmail(req.body.Emailid, subject, body);
      res.send(result);


    }
  })
}
export const updatestatusbirth = (req, res) => {
  empbirth.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    } else {

      const subject = 'Birth Application Updated';
      const body = `Your Birth Certificate is Updated<br>Status: ${req.body.status}<br>Please Collect the Certificate at District Officer Department<br>Thank You.`;
      sendEmail(req.body.Emailid, subject, body);
      res.send(result);
    }
  })
}

export const indexbirthh = (req, res) => {
  empbirth.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const indexdeathh = (req, res) => {
  empdeath.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const indexpentionn = (req, res) => {
  emppention.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const indexrationn = (req, res) => {
  empration.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}



export const update = (req, res) => {
  console.log(req.params.id);
  empreg.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      empreg.find((err, officer) => {
        if (err) {
          res.send(err);
        } else {
          res.send(officer);
        }
      })
    }

  })
}