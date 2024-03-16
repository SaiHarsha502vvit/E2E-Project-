import { Router } from "express";

const oritableRouter=Router()

oritableRouter.get('/',(req,res)=>{
    ___find({ "Teacher.id": user}, { _id: 0})
    .then(users => res.send(users))
    .catch(err => res.json(err));
  
  })

export default oritableRouter