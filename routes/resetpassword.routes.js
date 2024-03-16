import { Router } from "express";

const resetpasswordRouter=Router()

resetpasswordRouter.post('/',(req,res)=>{
    const receivedData3 = req.body;
  
    var myquery={teachermail:forgetmail};
    var newvalues={ $set:{password:receivedData3.password}}
    updateOne(myquery,newvalues)
      .then(users=>res.send({message:'successfully update'}))
      .catch(err=>res.json(err))
    })

export default resetpasswordRouter
