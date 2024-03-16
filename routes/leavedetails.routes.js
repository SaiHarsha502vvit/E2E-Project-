import { Router } from "express";

const leavedetailsRouter=Router()


leavedetailsRouter.get('/',(req,res)=>{
    UserModel3.find({}, { _id: 0})
    .then(users => res.send(users))
    .catch(err => res.json(err));
  
  })

  export default leavedetailsRouter