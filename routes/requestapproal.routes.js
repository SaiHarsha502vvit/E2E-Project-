import { Router } from "express";
import UserModel5 from '../model/usermodel5.model.js/UserModel5'

const requestapproalRouter=Router() 

requestapproalRouter.get('/',(req,res)=>{
    UserModel5.find({ toteachermali:user}, { _id: 0})
    .then(users => res.send(users))
    .catch(err => res.json(err));
  
  })

  export default requestapproalRouter