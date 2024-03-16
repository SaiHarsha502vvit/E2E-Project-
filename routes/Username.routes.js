import { Router } from "express";

const usernameRoute = Router()

usernameRoute.post('/',(req, res) => {
    const receivedData = req.body;
   
    user=receivedData.Usermail;
    
    find({ teachermail: receivedData.Usermail }, { _id: 0, username:1})
      .then(users =>{res.send(users);console.log(users)})
      .catch(err => res.json(err));
  })

  export default usernameRoute