import { Router } from "express";

const timetableRouter=Router()


timetableRouter.post('/',(req, res) => {
    const receivedData = req.body;
  
    ___find({ "Teacher.id": receivedData.teacherid }, { _id: 0})
      .then(users =>res.send(users) )
      .catch(err => res.json(err));
     
  })

export default timetableRouter