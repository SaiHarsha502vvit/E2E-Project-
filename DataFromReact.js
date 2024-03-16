import express, { json } from 'express';
import { connect, Schema, model } from 'mongoose';
import cors from 'cors';
import multer, { memoryStorage } from 'multer';
import { read, utils } from 'xlsx';
import UserModel, { find, updateOne, findOne, insertMany, deleteOne } from './model/usermodel.model.js/UserModel';
import { find as _find, updateOne as _updateOne } from './model/usermodel.model.js/UserModel2';
import UserModel4 from './model/usermodel.model.js/UserModel4';
import hoddetails, { find as __find, updateOne as __updateOne, deleteOne as _deleteOne } from './model/usermodel.model.js/hoddetails';
import Timetable from './model/timetablemodel.model.js/Timetable';
import UserModel1, { find as ___find } from './model/timetablemodel.model.js/UserModel1';
import teacherRoute from './routes/teacher.routes';
import usernameRoute from './routes/Username.routes';
import hodDepartmentRoute from './routes/HeadOfDepartment.routes';
import userdetailsRoute from './routes/userdetails.routes';
import teacherdetailsRoute from './routes/teacherdetails.routes';
import admindetailsRoute from './routes/admindetails.routes';
import oritableRouter from './routes/oritable.routes';
import mesRouter from './routes/mes.routes';
import changeRouter from './routes/change.routes';
import timetableRouter from './routes/timetable.routes';
import forgetRouter from './routes/forget.routes';
import resetpasswordRouter from './routes/resetpassword.routes';
import leaveformRouter from './routes/leaveform.routes';
import hoddetailsprofileRouter from './routes/hoddetailsprofile.routes';
import hodalldetailsRouter from './routes/hodalldetails.routes';
import allhoddetailsRouter from './routes/allhoddetails.routes';
import hodchangepasswordRouter from './routes/hodchangepassword.routes';
import leaveacceptRouter from './routes/leaveaccept.routes';
import hodeditdetailsRouter from './routes/hodeditdetails.routes';
import requestadjustRouter from './routes/requestadjust.routes';
import UserModel5 from './model/usermodel5.model.js/'
import requestapproalRouter from './routes/requestapproal.routes';
import AdminRouter from './routes/Admin.routes';
import requestresponseRouter from './routes/requestresponse.routes';
import admindetailsprofileRouter from './routes/admindetailsprofile.routes';
import admineditdetailsRouter from './routes/admineditdetails.routes';
import adminchangepasswordRouter from './routes/adminchangepassword.routes';
import addteacherRouter from './routes/addteacher.routes';

const app = express();
app.use(cors());
app.use(json());
connect('mongodb://localhost:27017/Student', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var user;
var forgetmail;
// Define the schema outside the route handler



const UserSchema1 = new Schema({
  teacherid:String,
  teachermail:String,
 
  mon:Object,
  tue:Object,
  wed:Object,
  thu:Object,
  fri:Object,
  sat:Object,
});



const grouptimetableSchema = new Schema({
  Teacher: {
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


const storage = memoryStorage();
const upload = multer({ storage: storage });



module.exports=UserModel,
app.use('/Teacher', teacherRoute);
app.use('/Username', usernameRoute);
app.use('/HeadOfDepartment', hodDepartmentRoute);
app.use("/userdetails",userdetailsRoute)
app.use("/teacherdetails",teacherdetailsRoute)
app.use("/admindetails",admindetailsRoute)
app.use("/oritable",oritableRouter)
app.use('/mes',mesRouter)
app.use('/change',changeRouter)
app.post('/timetable',timetableRouter);
app.use('/forget', forgetRouter);
app.use('/resetpassword',resetpasswordRouter)
app.use('/leaveform',leaveformRouter);
app.use("/leavedetails",)
app.use("/hoddetailsprofile",hoddetailsprofileRouter)
app.use("/hodalldetails",hodalldetailsRouter)
app.use("/allhoddetails",allhoddetailsRouter)
app.use('/hodchangepassword',hodchangepasswordRouter)
app.use('/leaveaccept',leaveacceptRouter)
app.use('/hodeditdetails',hodeditdetailsRouter)
app.use('/requestadjust', requestadjustRouter);
app.use("/requestapproal",requestapproalRouter)
app.use('/requestaccept',requestapproalRouter)
app.use('/Admin', AdminRouter);
app.use("/requestresponse",requestresponseRouter)
app.use("/admindetailsprofile",admindetailsprofileRouter)
app.use('/admineditdetails',admineditdetailsRouter)
app.use('/adminchangepassword',adminchangepasswordRouter)
app.use('/addteacher',addteacherRouter);


                    app.post('/upload', upload.single('file'), async (req, res) => {
                      try {
                        const workbook = read(req.file.buffer, { type: 'buffer' });
                        const sheetName = workbook.SheetNames[0];
                        const excelData = utils.sheet_to_json(workbook.Sheets[sheetName]);
                    
                        //console.log('Excel Data:', excelData); // Log the Excel data for debugging
                    
                        const timetableData = [];
                    
                        for (const entry of excelData) {
                          const username = entry['username'];
                          const password = entry['password'];
                          const teacherid = entry['teacherid'];
                          const teachermail = entry['teachermail'];
                          const department = entry['department'];
                          const address = entry['address'];
                          const contact = entry['contact'];
                          // Use findOne to check if the user already exists in the database
                          const existingUser = await findOne({ username: username });
                    
                          if (username && password && !existingUser) {
                            console.log(`Condition is true for: ${username}, ${password}`);
                    
                            const timetableEntry = new UserModel({
                              username: username,
                              password: password,
                              teacherid:teacherid,
                              teachermail:teachermail,
                              department:department,
                              address:address,
                              contact:contact,        

                            });
                    
                            timetableData.push(timetableEntry);
                          } else {
                            //console.log(`User with username ${username} already exists or missing data.`);
                          }
                        }
                    
                        await insertMany(timetableData);
                        //console.log("Data successfully inserted");
                        res.status(200).json({ message: 'File Uploaded Successfully!' });
                      } catch (error) {
                        console.error('Error processing file:', error);
                        res.status(500).json({ message: 'Error processing file', error: error.message });
                      }
                    });


                    app.delete('/delete', (req, res) => {
                      const receivedData1 = req.body;
                      deleteOne({ teacherid:receivedData1.teacherid })
                        .then(result => {
                          if (result.deletedCount === 1) {
                            res.json({ message: `User with username '${receivedData1.teacherid}' deleted successfully` });
                          } else {
                            res.json({ message: `User with username '${receivedData1.teacherid}' not found` });
                          }
                        })
                        .catch(err => res.status(500).json({ error: 'Internal Server Error' }));
                    });

                 
                    app.post('/onetimetableupload', upload.single('file'), async (req, res) => {
                      try {
                        const { teacherid } = req.body;
                        const workbook = read(req.file.buffer, { type: 'buffer' });
                      const sheetName = workbook.SheetNames[0];
                        const excelData = utils.sheet_to_json(workbook.Sheets[sheetName]);
                      // console.log(excelData);
                        const timetableData = {
                          Teacher: {
                            name:excelData[0].__EMPTY,
                            id:excelData[0].__EMPTY_1,
                            Mon: "",
                            Tue: "",
                            Wed: "",
                            Thu: "",
                            Fri: "",
                            Sat: "",
                          },
                        };
                    
                        let currentDay = "";
                        const headerRow = excelData[1];
                        //console.log(headerRow);
                        const headerRowobj = Object.keys(headerRow).map(key => ({
                          [key]: headerRow[key]
                        }));
                        const scheduleRow =[];
                        for(let i=2;i<excelData.length;i++){
                           scheduleRow.push(excelData[i]);
                        }
                        //console.log(scheduleRow);
                    
                        for (let i = 2; i < excelData.length; i++) {
                          const day = excelData[i].__EMPTY;
                          if (day) {
                            currentDay = day;
                            //console.log(currentDay);
                            let daySchedule = "{";
                    
                            for (let j = 1; j <=headerRowobj.length; j++) {
                              const key = headerRow['__EMPTY_'+j];
                              //console.log(key);
                              const value = excelData[i][`__EMPTY_${j}`];
                             // console.log(value);
                              daySchedule += `"${key}": "${value}", `;
                              //console.log(daySchedule);
                            }
                            daySchedule+=`}`;
                    
                            // Remove trailing comma and space
                            //daySchedule = daySchedule.slice(0, -2);
                            //console.log(daySchedule);
                            // Assign the day's schedule to the correct day in timetableData
                            timetableData.Teacher[currentDay] = daySchedule;
                          }
                        }
                    
                        // Insert timetableData into MongoDB
                        const timetableEntry = new UserModel1(timetableData);
                        await timetableEntry.save();
                        console.log("Timetable data inserted successfully! ");
                    
                        res.status(200).json({ message: 'Timetable data inserted successfully!' });
                      } catch (error) {
                        console.error('Error processing file:', error);
                        res.status(500).json({ message: 'Error processing file' });
                      }
                    });
                    app.post('/grouptimetableupload', upload.single('file'), async (req, res) => {
                      try {
                        const workbook = read(req.file.buffer, { type: 'buffer' });
                        const sheetName = workbook.SheetNames[0];
                        const excelData = utils.sheet_to_json(workbook.Sheets[sheetName]);
                        //console.log(excelData);
                        const result = [];
                        let currentPerson = [];
                    
                        for (const item of excelData) {
                          if (item.__EMPTY && item.__EMPTY_1 && item.__EMPTY_3 && item.__EMPTY_3.includes('SEM')) {
                            if (currentPerson.length > 0) {
                              result.push([...currentPerson]);
                              currentPerson = [];
                            }
                          }
                          currentPerson.push(item);
                        }
                    
                        if (currentPerson.length > 0) {
                          result.push([...currentPerson]);
                        }
                    
                        //console.log(result);
                    
                        for (let i = 0; i < result.length; i++) {
                          const entry = result[i];
                          const timetableData = {
                            Teacher: {
                              name:entry[0].__EMPTY,
                              id: entry[0].__EMPTY_1,
                              Mon: "",
                              Tue: "",
                              Wed: "",
                              Thu: "",
                              Fri: "",
                              Sat: "",
                            },
                          };
                    
                          let currentDay = "";
                          const headerRow = entry[1];
                          //console.log(headerRow);
                          const headerRowobj = Object.keys(headerRow).map(key => ({
                            [key]: headerRow[key]
                          }));
                          const scheduleRow = [];
                          for (let i = 2; i < entry.length; i++) {
                            scheduleRow.push(entry[i]);
                          }
                          //console.log(scheduleRow);
                          for (let i = 2; i< entry.length; i++) {
                            const day = entry[i].__EMPTY;
                            if (day) {
                              currentDay = day;
                              let daySchedule = "{";
                    
                              for (let j = 1; j <= headerRowobj.length; j++) {
                                const key = headerRow['__EMPTY_' + j];
                                //console.log(key);
                                const value = entry[i][`__EMPTY_${j}`];
                                //console.log(value);
                                daySchedule += `"${key}": "${value}", `;
                                //console.log(daySchedule);
                              }
                              daySchedule+=`}`;
                    
                              timetableData.Teacher[currentDay] = daySchedule;
                            }
                          }
                    
                          const timetableEntry = new Timetable(timetableData);
                          await timetableEntry.save();
                        }
                    
                        console.log("Timetable data inserted successfully!");
                        res.status(200).json({ message: 'Timetable data inserted successfully!' });
                      } catch (error) {
                        console.error('Error processing file:', error);
                        res.status(500).json({ message: 'Error processing file' });
                      }
                    });
                 
                  app.post('/leaverefresh', async(req, res) => {
                    
                    const existingUsers = await leavetype.find({},{_id:0});
                    data="{"
                    for (const existingUser of existingUsers) {
                       data =data+existingUser.leavetype.toString()+":"+existingUser.defaultallowance.toString()+",";  
                    }
                    data+="}";
                   // console.log(existingUsers)
                    const userdetails = await find({},{_id:0});
            for(const user1 of userdetails){
              const duplicate = await leavebalance.findOne({ username: user1.username,teachermail:user1.teachermail });
                  if(duplicate){
                    //console.log(`Condition is true for ${user1.username}`);
                    var myquery={teachermail:user1.teachermail};
                    var newvalues={ $set:{leave:data}}
                   leavebalance.updateOne(myquery,newvalues)
                     
                      .catch(err=>res.json(err))
                  
                  }else{
                  //  console.log("condition is false for"+user1.username)
                    const leaveTypeDictionary = {
                      username: user1.username,
                      teachermail: user1.teachermail,
                   };
                   //console.log(leaveTypeDictionary)
                    leaveTypeDictionary['leave']=data;
                   // console.log("hello 1"+leaveTypeDictionary)
                      const details = new leavebalance(leaveTypeDictionary);
                        await details.save();
                        res.json({message:"successfully inserted"})
                  }
            }
                    
                
                    });
                    app.get("/teacherclassadjust",(req,res)=>{
                      ___find({}, { _id: 0})
                      .then(users => res.send(users))
                      .catch(err => res.json(err));
                    
                    })
                    app.get("/actionbutton",(req,res)=>{
                      UserModel5.find({}, { _id: 0})
                      .then(users => res.send(users))
                      .catch(err => res.json(err));
                    
                    })
                    app.get("/newleavedetails",(req,res)=>{
                      leavetype.find({}, { _id: 0})
                      .then(users => res.send(users))
                      .catch(err => res.json(err));
                    
                    })
                    app.post('/addnewleave', (req, res) => {
                      const receivedData = req.body;
                      const leaveData = {
                       
                            leavetype: receivedData.leavetype,
                            defaultallowance: receivedData.defaultallowance
                        
                    };
                      const leave = new leavetype(leaveData);
                     // console.log("data same",receivedData);
                       leave.save()
                .then(() =>res.send({message:"Data added successfully"}) )
            .catch(err => console.log(err));
                     
                    });
                    app.delete('/leavetypedelete', (req, res) => {
                      const receivedData1 = req.body;
                      leavetype.deleteOne({ leavetype:receivedData1.leavetype })
                        .then(result => {
                          if (result.deletedCount === 1) {
                            res.json({ message: `User with username '${receivedData1.teacherid}' deleted successfully` });
                          } else {
                            res.json({ message: `User with username '${receivedData1.teacherid}' not found` });
                          }
                        })
                        .catch(err => res.status(500).json({ error: 'Internal Server Error' }));
                    });
                    app.get("/teacherleavehistory",(req,res)=>{
                      leavebalance.find({ teachermail: user}, { _id: 0})
                      .then(users => res.send(users))
                      .catch(err => res.json(err));
                    
                    })
                    app.post('/particularleavehistory', (req, res) => {
                      const receivedData = req.body;
                
                      leavebalance.find({ teachermail: receivedData.teachermail }, { _id: 0})
                        .then(users =>{console.log(users); res.send(users)})
                        .catch(err => res.json(err));
                    });
                    app.get("/allleavetypes",(req,res)=>{
                      leavetype.find({}, { _id: 0})
                      .then(users => res.send(users))
                      .catch(err => res.json(err));
                    
                    })
                   /* app.post('/classtimetable', (req, res) => {
                      const receivedData = req.body;
                      console.log(receivedData)
                      classtimetablemodel.find({"Teacher.Year":receivedData.year,"Teacher.Department":receivedData.department,"Teacher.Section":receivedData.section})
                        .then(users =>{console.log(users[0].Teacher.Year);res.send(users)})
                        .catch(err => res.json(err))
                    });*/
                    app.post('/classtimetable', (req, res) => {
                      const receivedData = req.body;
                     // console.log(receivedData);
                    
                      classtimetablemodel.find({
                        "Teacher.Year": receivedData.year,
                        "Teacher.Department": receivedData.department,
                        "Teacher.Section": receivedData.section
                      })
                      .then(users =>  res.send(users))
                      .catch(err => res.json(err));
                    });
                     app.post('/addhoddetails', async(req, res) => {
                      const receivedData = req.body;
                      receivedData.password="vvit@123";
                      receivedData.teachermail=receivedData.teacherid+"@vvit.net"
                      const leave = new hoddetails(receivedData);
                     // console.log("data same",receivedData);
                       leave.save()
                .then()
                 .catch(err => console.log(err));
                
                      });
          app.post('/finddepartment', (req, res) => {
        const receivedData = req.body;
    //  console.log(receivedData.department)
      find({ department: receivedData.department}, { _id: 0})
          .then(users =>res.send(users) )
          .catch(err => res.json(err));
         
      });
      app.delete('/hoddelete', (req, res) => {
        const receivedData1 = req.body;
        _deleteOne({ teacherid:receivedData1.teacherid,department:receivedData1.department })
          .then(result => {
            if (result.deletedCount === 1) {
              res.json({ message: `User with username '${receivedData1.teacherid}' deleted successfully` });
            } else {
              res.json({ message: `User with username '${receivedData1.teacherid}' not found` });
            }
          })
          .catch(err => res.status(500).json({ error: 'Internal Server Error' }));
      });
      app.post('/uploadSingleClass', upload.single('file'), async (req, res) => {
        try {
          const { year, department, classname } = req.body;
            const workbook = read(req.file.buffer, { type: 'buffer' });
         const sheetName = workbook.SheetNames[0];
          const excelData = utils.sheet_to_json(workbook.Sheets[sheetName]);
        //  console.log(excelData);

            const academicYear = excelData[0].__EMPTY.split(':')[1].trim();
          const sem = excelData[0].__EMPTY_3;
          const wef = excelData[0].__EMPTY_8.split(':')[1].trim();
          const classInfo = excelData[1].__EMPTY.split(' ');
          const className = classInfo.slice(0, classInfo.length).join(' ');
          const roomNo = excelData[1].__EMPTY_3.split(':')[1].trim();
          const classTeacher = excelData[1].__EMPTY_8.split(':')[1].trim();
          // Map Excel data to MongoDB schema
          const timetableData = {
            Teacher: {
              Year:year,
              Department:department,
              Section:classname,
              AcademicYear:academicYear,
              Sem:sem,
              WEF:wef,
              Class:className,
              RoomNo:roomNo,
              ClassTeacher:classTeacher,
              Mon: "",
              Tue: "",
              Wed: "",
              Thu: "",
              Fri: "",
              Sat: "",
            },
          };
       
          let currentDay = "";
          const headerRow = excelData[2];
        
          const headerRowobj = Object.keys(headerRow).map(key => ({
            [key]: headerRow[key]
          }));
       
          const scheduleRow =[];
          for(let i=4;i<excelData.length;i++){
             scheduleRow.push(excelData[i]);
          }
        
          const times={};
          const day = excelData[4].__EMPTY;
            if (day) {
              currentDay = day;
              //console.log(currentDay);
              let daySchedule = "{";
      
              for (let j = 1; j < headerRowobj.length; j++) {
                //console.log(j);
                const key = headerRow[`__EMPTY_${j}`];
                //console.log(key);
                const value = excelData[4][`__EMPTY_${j}`] ? excelData[4][`__EMPTY_${j}`] : excelData[4][`__EMPTY_${j-1}`];
                //console.log(value);
                const trimmedKey = key.trim();
                const trimmedValue = (typeof value === 'string') ? value.trim() : value;
                daySchedule += `"${trimmedKey}": "${trimmedValue}", `;
                //console.log(daySchedule);
                if (trimmedValue === "BREAK" || trimmedValue === "LUNCH") {
                  times[trimmedKey]=trimmedValue;
                }
                //console.log(times);
              }
              daySchedule+=`}`;
            
               timetableData.Teacher[currentDay] = daySchedule;
            }
            for (let i = 5; i < excelData.length; i++) {
              //console.log(excelData.length);
              const day = excelData[i].__EMPTY;
              //console.log(day);
              if (day) {
                  currentDay = day;
                  //console.log(currentDay);
                  let daySchedule = "{";
          
                  for (let j = 1; j < headerRowobj.length; j++) {
                      const key = headerRow[`__EMPTY_${j}`];
                      const trimmedKey = key.trim();
                      //console.log(trimmedKey);
                      //console.log(times);
                      let value;
                      if (trimmedKey in times) {
                          value = times[trimmedKey];
                      } else {
                          value = excelData[i][`__EMPTY_${j}`] || excelData[i][`__EMPTY_${j - 1}`];
                      }
          
                      //const trimmedKey = key.trim();
                      const trimmedValue = (typeof value === 'string') ? value.trim() : value;
          
                      daySchedule += `"${trimmedKey}": "${trimmedValue}", `;
                  }
          
                  daySchedule += `}`;
              timetableData.Teacher[currentDay] = daySchedule;
              }
          }
        const timetableEntry = new classtimetablemodel(timetableData);
          await timetableEntry.save();
          console.log("Timetable data inserted successfully! ");
      
      res.status(200).json({ message: 'Timetable data inserted successfully!' });
        } catch (error) {
          console.error('Error processing file:', error);
          res.status(500).json({ message: 'Error processing file' });
        }
      });

app.listen(3300, () => console.log('server is up'));
