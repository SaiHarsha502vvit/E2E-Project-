import { Router } from "express";

const admindetailsRoute=Router()

admindetailsRoute.get('/',(req,res)=>{
    find({ teachermail: user}, { _id: 0})
    .then(users => res.send(users))
    .catch(err => res.json(err));
  
  })

  export default admindetailsRoute