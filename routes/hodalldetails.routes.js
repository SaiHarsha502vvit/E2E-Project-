import { Router } from "express";

const hodalldetailsRouter=Router()

hodalldetailsRouter.get('/',(req,res)=>{
    __find({}, { _id: 0,department:1})
    .then(users => res.send(users))
    .catch(err => res.json(err));
  
  })

  export default hodalldetailsRouter