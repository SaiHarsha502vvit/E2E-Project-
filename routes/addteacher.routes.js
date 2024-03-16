import { Router } from "express";
import UserModel from '../model/usermodel.model/UserModel'
const addteacherRouter=Router()

addteacherRouter.post('/',async(req, res) => {
    const receivedData = req.body;
    receivedData.password="vvit@123";
    const leave = new UserModel(receivedData);
   // console.log("data same",receivedData);
     leave.save()
.then()
.catch(err => console.log(err));
const existingUsers = await leavetype.find({},{_id:0});
const leaveTypeDictionary = {
  username: receivedData.username,
  teachermail: receivedData.teachermail,
};
   data="{"
for (const existingUser of existingUsers) {
   data =data+existingUser.leavetype.toString()+":"+existingUser.defaultallowance.toString()+",";  
}
data+="}";
leaveTypeDictionary['leave']=data;
  const details = new leavebalance(leaveTypeDictionary);
    await details.save();
    res.json({message:"successfully inserted"})
    })


export default addteacherRouter 