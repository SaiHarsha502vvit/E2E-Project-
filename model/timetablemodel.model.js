import mongoose from 'mongoose'
const timetableSchema = new mongoose.Schema({
 
    Teacher: {
      name: {
        type: String,
        required: true,
      },
      id: {
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
  });

  export const Timetable = mongoose.model('teachertimetables', timetableSchema);
  export const UserModel1 = mongoose.model('teachertimetables', timetableSchema);
