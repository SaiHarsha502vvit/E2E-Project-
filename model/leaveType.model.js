import mongoose from "mongoose";

const leavetypesschema=new Schema({
  
    leavetype: { type: String, required: true },
    defaultallowance: { type: String, required: false }
  

})

export const leavetype= model('leavetype', leavetypesschema);
