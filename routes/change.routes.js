import { Router } from "express";

const changeRouter=Router()


changeRouter.post('/',(req,res)=>{
    const receivedData1 = req.body;
    var myquery={teachermail:user};
    var newvalues={ $set:{password:receivedData1.Newpassword}}
    updateOne(myquery,newvalues)
      .then(users=>res.send({message:'successfully updated'}))
      .catch(err=>res.json(err))
    })

export default changeRouter