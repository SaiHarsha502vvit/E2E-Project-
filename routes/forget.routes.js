import { Router } from "express";

const forgetRouter=Router()

forgetRouter.post('/',(req, res) => {
    forgetmail=req.body.teachermail;
    // rest of your code...
  })

export default forgetRouter