import { Router } from "express";

const hoddetailsprofileRouter=Router()

hoddetailsprofileRouter.get('/',(req,res)=>{
    __find({ teachermail:user }, { _id: 0})
    .then(users => res.send(users))
    .catch(err => res.json(err));
  
  })


  export default hoddetailsprofileRouter

  