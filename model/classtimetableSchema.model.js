import mongoose from "mongoose";

const classtimetableSchema = new Schema({
    Teacher: {
      Year: {
        type: String,
        required: true,
      },
      Department: {
        type: String,
        required: true,
      },
      Section: {
        type: String,
        required: true,
      },
      AcademicYear: {
        type: String,
        required: true,
      },
      Sem: {
        type: String,
        required: true,
      },
      WEF: {
        type: String,
        required: true,
      },
      Class: {
        type: String,
        required: true,
      },
      RoomNo: {
        type: String,
        required: true,
      },
      ClassTeacher: {
        type: String,
        required: true,
      },
      Mon: {
        type: String,
        required: false,
      },
      Tue: {
        type: String,
        required: false,
      },
      Wed: {
        type: String,
        required: false,
      },
      Thu: {
        type: String,
        required: false,
      },
      Fri: {
        type: String,
        required: false,
      },
      Sat: {
        type: String,
        required: false,
      },
    },
  }, { strict: false }); // Allow additional fields not defined in the schema

  
  export const classtimetablemodel= model('classtimetables', classtimetableSchema);
