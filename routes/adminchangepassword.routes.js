import { Router } from "express";

const adminchangepasswordRouter=Router()


adminchangepasswordRouter.post('/',async(req,res)=>{
    const receivedData1 = req.body;
    //console.log('data received on Express',receivedData1.Username,receivedData1.Department, receivedData1.Address);
    var myquery={teachermail:user};
    var newvalues={ $set:{password:receivedData1.Newpassword}}
   _updateOne(myquery,newvalues)
      .then(users=>res.send({message:'successfully updated'}))
      .catch(err=>res.json(err))
    })


export default adminchangepasswordRouter