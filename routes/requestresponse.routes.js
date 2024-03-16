import { Router } from "express";


const requestresponseRouter = Router()


requestresponseRouter.get('/',(req,res)=>{
    UserModel5.find({ fromteachermali:user}, { _id: 0})
    .then(users => res.send(users))
    .catch(err => res.json(err));
  
  })

  export default requestresponseRouter