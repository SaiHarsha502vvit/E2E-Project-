import mongoose from "mongoose";

const UserSchema3 = new mongoose.Schema({
    teachermail:String,
    date:String,
    teachername:String,
    leavetype:String,
    teacherid:String,
    Designature:String,
    status:String,
    Branch:String,
    LeaveAvailedTillDate:String,
    ReasonforLeave:String,
    date1:String,
    class1:String,time1:String,
    nameofalternative1:String,
    date2:String,
    class2:String,
    time2:String,
    nameofalternative2:String,
    date3:String,
    class3:String,
    time3:String,
    nameofalternative3:String,
    date4:String,
    class4:String,
    time4:String,
    nameofalternative4:String,
    date5:String,
    class5:String,
    time5:String,
    nameofalternative5:String
  });

  export const UserModel3= mongoose.model('leaveform', UserSchema3);
