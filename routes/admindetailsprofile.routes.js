import { Router } from "express";

const admindetailsprofileRouter=Router()


admindetailsprofileRouter.get('/',(req,res)=>{
    _find({ teachermail:user }, { _id: 0})
    .then(users => res.send(users))
    .catch(err => res.json(err));
  
  })

  export default admindetailsprofileRouter