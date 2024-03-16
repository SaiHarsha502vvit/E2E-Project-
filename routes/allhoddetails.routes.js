import { Router } from "express";

const allhoddetailsRouter=Router()

allhoddetailsRouter.get('/',(req,res)=>{
    __find({}, { _id: 0})
    .then(users => res.send(users))
    .catch(err => res.json(err));
  
  })

  export default allhoddetailsRouter