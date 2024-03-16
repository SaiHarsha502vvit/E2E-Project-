import { Router } from "express";

const AdminRouter=Router()


AdminRouter.post('/',(req, res) => {
    const receivedData = req.body;
    user=receivedData.Usermail;
    _find({ teachermail: receivedData.Usermail }, { _id: 0, password: 1 })
      .then(users => res.send(users))
      .catch(err => res.json(err));
  })

  export default AdminRouter