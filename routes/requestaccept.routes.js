import { Router } from "express";
import UserModel5 from '../model/usermodel5.model.js/UserModel5'

const requestacceptRouter=Router() 


requestacceptRouter.post('/',(req,res)=>{
    const receivedData1 = req.body;
    var myquery={fromteachermali:receivedData1.teachermail,date:receivedData1.date};
    var newvalues={ $set:{status:receivedData1.status}}
    UserModel5.updateOne(myquery,newvalues)
      .then(users=>res.send({message:'successfully updated'}))
      .catch(err=>res.json(err))
    })


    export default requestacceptRouter