import { Router } from "express";

const teacherdetailsRoute=Router()

teacherdetailsRoute.get('/',(req,res)=>{
    find({}, { _id: 0})
    .then(users => res.send(users))
    .catch(err => res.json(err));
  
  })

  export default teacherdetailsRoute