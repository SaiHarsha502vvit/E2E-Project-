import mongoose from "mongoose";


const UserSchema4=new Schema({
 
    toteachermali:String,
    date:String,
    class:String,
    time:String,
    fromteachermali:String,
    status:String,
  })

  export const UserModel5 = mongoose.model('classadjust', UserSchema4);