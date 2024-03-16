import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    teacherid:String,
    teachermail:String,
    department:String,
    address:String,
    contact:String,
  });

  export const UserModel = mongoose.model('teacherdetails', UserSchema);
  export const UserModel2= mongoose.model('admindetails', UserSchema);
  export const UserModel4 = mongoose.model('admindetails', UserSchema);
  export const hoddetails= mongoose.model('hoddetails', UserSchema);
