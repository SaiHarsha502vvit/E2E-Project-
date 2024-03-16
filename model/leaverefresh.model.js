import mongoose from "mongoose";


const leaverefresh = new Schema({
    username:String,
    teachermail:String,
    leave:String,
  
   });
  
  
  
  const leavebalance= model('leavebalance', leaverefresh);