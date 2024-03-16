import { Router } from "express";


const hodeditdetailsRouter=Router() 


hodeditdetailsRouter.post('/',(req,res)=>{
    const receivedData1 = req.body;
    var myquery={teachermail:user};
    var newvalues={ $set:{username:receivedData1.Username,department:receivedData1.Department,address:receivedData1.Address,contact:receivedData1.Contact}}
    __updateOne(myquery,newvalues)
      .then(users=>res.send({message:'successfully updated'}))
      .catch(err=>res.json(err))
    })

export default hodeditdetailsRouter