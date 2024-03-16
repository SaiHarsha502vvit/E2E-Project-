import { Router } from "express";
import UserModel3 from './model/usermodel3.model.js/UserModel3';

const leaveformRouter=Router()

leaveformRouter.post('/', (req, res) => {
    const receivedData = req.body;
    const leave = new UserModel3(receivedData);
    console.log("data same",receivedData);
     leave.save()
.then(() =>res.send({message:"Data added successfully"}) )
.catch(err => console.log(err));
   
  })

export default leaveformRouter