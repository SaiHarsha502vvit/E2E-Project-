import { Router } from "express";


const leaveacceptRouter=Router()

leaveacceptRouter.post('/',async(req,res)=>{
    const receivedData1 = req.body;
    var myquery={teachermail:receivedData1.teachermail,date:receivedData1.date};
    var newvalues={ $set:{status:receivedData1.status}}
    var myquery1={teachermail:receivedData1.teachermail};
   
      const existingUsers = await leavebalance.find({teachermail:receivedData1.teachermail},{_id:0});
  
      
        var str='';
        const resu= existingUsers[0].leave.split(',');
        console.log(resu)
        resu.map((leaveItem, leaveIndex) => {
          const a = leaveItem.split(':');
          if(a[0].replace('{', '')===receivedData1.leavetype){
            console.log(a[0].replace('{', '')+"  "+receivedData1.leavetype)
            str+=a[0]+":"+String( parseInt(a[1]-1))+","
             
          }else{
            if(leaveItem=='}')
            str+=leaveItem;
            else
            str+=leaveItem+",";
          }
        }
     
        )
       
        var newvalues1={ $set:{leave:str}}
        leavebalance.updateOne(myquery1,newvalues1)

      .catch(err=>res.json(err))
      UserModel3.updateOne(myquery,newvalues)
      .then(users=>res.send({message:'successfully updated'}))
      .catch(err=>res.json(err))
    })


    export default leaveacceptRouter