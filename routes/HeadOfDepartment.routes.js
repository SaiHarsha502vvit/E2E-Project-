import { Router } from "express";
import mongoose from "mongoose";

const hodDepartmentRoute = Router()

hodDepartmentRoute.post('/',(req, res) => {
    const receivedData = req.body;
    user=receivedData.Usermail;
    __find({ teachermail: receivedData.Usermail }, { _id: 0, password: 1 })
      .then(users => res.send(users))
      .catch(err => res.json(err));
  })

  export default hodDepartmentRoute