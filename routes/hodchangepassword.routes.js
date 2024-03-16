import { Router } from "express";

const hodchangepasswordRouter=Router()


hodchangepasswordRouter.post('/',(req,res)=>{
    const receivedData1 = req.body;
    var myquery={teachermail:user};
    var newvalues={ $set:{password:receivedData1.Newpassword}}
    __updateOne(myquery,newvalues)
      .then(users=>res.send({message:'successfully updated'}))
      .catch(err=>res.json(err))
    })


export default hodchangepasswordRouter