import { Router } from "express";

const teacherRoute=Router()

teacherRoute.post('/',(req, res) => {
    const receivedData = req.body;
    user=receivedData.Usermail;
  
    // Query the database using UserModel
    find({ teachermail: receivedData.Usermail }, { _id: 0, password:1})
      .then(users =>res.send(users))
      .catch(err => res.json(err));
  })

  export default teacherRoute;