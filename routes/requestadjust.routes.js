import { Router } from "express";


const requestadjustRouter=Router() 

requestadjustRouter.post('/',(req, res) => {
    const receivedData = req.body;
    receivedData.fromteachermali=user;
    const leave = new UserModel5(receivedData);
  //  console.log("data same",receivedData);
     leave.save()
.then(() =>res.send({message:"Data added successfully"}) )
.catch(err => console.log(err));
   
  })


  export default requestadjustRouter