const express=require('express');
const mysql=require('mysql');
var bodyParser=require('body-parser')
const cors=require('cors')
const multer=require('multer')
app=express()
app.use(cors(
    // origin:"http://localhost:3000"
))
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
const db=mysql.createPool({
    connectionLimit:10,
    host:"localhost",
    user:"root",
    password:"",
    database:"facultyhrreport"
});
// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//       cb(null,'images')
//     },
//     filename:(req,file,cb)=>{
//       cb(null,file.originalname)
//     }
  
//   });
//   const upload = multer({
//     storage:storage,
//     filefilter:(req,file,callback)=>{
//       var ext = path.extname(file.originalname);
//       if(ext !=='.png' && ext !=='.jpeg' && ext !=='.gif' && ext !=='.jpeg'){
//         return callback(new Error('only images are allowed'))
//       }
//       callback(null,true)
      
//     },
//   });
//   app.post("/uploadfile", upload.single('image'), (req, res) => {
//     if (!req.file) {
//         console.log("No file upload");
//     } else {
//         console.log(req.file.filename)
//         var imgsrc = 'http://127.0.0.1:8080/images/' + req.file.filename
//         var insertData = "UPDATE `student` SET `image`= ? WHERE `regno`='20b01a12i2'"
//         db.query(insertData, [imgsrc], (err, result) => {
//             if (err) throw err
//             console.log("file uploaded")
//         })
//     }
//   });

db.getConnection((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Database connected!!!");
    }
});


 app.get("/",(req,res)=>{
     console.log("Server started")
});

app.get("/Facultylogin/Fnavbar/Facultywise",(req,res)=>{
    // console.log("Getting data from db");
    db.query("select * from facultymanagement ",(err,result)=>
    {
        if(err)
        {
            console.log(err);
        }
        else{
            // console.log(result);
            res.send(result);
        }
    });
});
app.get("/Facultylogin/Fnavbar/Departmentwise",(req,res)=>{
    // console.log("Getting data from db");
    db.query("select * from facultymanagement order by Department",(err,result)=>
    {
        if(err)
        {
            console.log(err);
        }
        else{
            // console.log(result);
            res.send(result);
        }
    });
});

// app.get("/report",(req,res)=>{
//     const reg="20b01a12h9";
//     const name="Keerthana"
//     console.log("insert data into db");
//     db.query(`insert into student values(?,?)`,[reg,name],(err,result)=>
//     {
//         if(err)
//         {
//             console.log(err);
//         }
//         else{
//             // console.log(result);
//             res.send("inserted");
//         }
//     });
// });
app.post("/Adminlogin/Anavbar/Addprofile",(req,res)=>{
   const FacultyId=req.body.id;
  const Name=req.body.name;
  const Emailid=req.body.emailid;
  const mobileNo=req.body.mnumber;
  const Address=req.body.address;
  const Education=req.body.edu;
  const Publication=req.body.publication;
  const Experience=req.body.experience;
  const WorkshopAttended=req.body.wattended;
  const WorkshopConducted=req.body.wconducted;
  const Gender=req.body.gender;
  const Department=req.body.dep;
  const Status=req.body.status;
  /*const id=req.body.FacultyId;
  const name=req.body.Name;
  const emailid=req.body.Emailid;
  const mnumber=req.body.mobileNo;
  const address=req.body.Address;
  const edu=req.body.Education;
  const publication=req.body.Publication;
  const experience=req.body.Experience;
  const Wattended=req.body.WorkshopAttended;
  const wconducted=req.body.WorkshopConducted;
  const gender=req.body.Gender;
  const department=req.body.Department;
  const status=req.body.Status;*/



  
   var sql=`insert into facultymanagement(FacultyId,Name,Emailid,mobileNo,Address,Education,Publication,Experience,WorkshopAttended,WorkshopConducted,Gender,Department,Status) value(?,?,?,?,?,?,?,?,?,?,?,?,?)`;
   db.query(sql,[FacultyId,Name,Emailid,mobileNo,Address,Education,Publication,Experience,WorkshopAttended,WorkshopConducted,Gender,Department,Status],(err,result)=>{
            //  if (err)
            //  throw err
            //  else{
            //     res.send("inserted successfull")
            //  }
            // console.log(err)
   })
   

})
// app.post("/Removeprofile",(req,res)=>{
//     const uregno=req.body.regno;
//    const name1=req.body.name
//  //    const na=req.body.name
//     console.log(uregno)
//     console.log(name1)
//     var dsql=`DELETE FROM facultymanagement WHERE regno=?`;
//     db.query(dsql,uregno,(err,result)=>{
//             //   if (err)
//             //   throw err
//             //   else{
//             //      res.send("inserted successfull")
//             //   }
//             console.log(err)
//     })
    
 
//  })
//  app.post("/Removeprofile/:FacultyId",(req,res)=>{
//     const regno=req.params.regno;
//     const mysql='DELETE FROM student WHERE facultymnagement.FacultyId=(?)';
//     db.query(mysql,[regno],(err)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Deleted successfully");
//             res.send("delete")
//         }
//     })
//  })
 
 app.post("/Adminlogin/Anavbar/Removeprofile",(req,res)=>{
    const{id,status}=req.body
    const sql='UPDATE facultymanagement SET Status=(?) WHERE FacultyId=(?)';
    db.query(sql,[status,id],(error)=>{
        if(error){
            console.log(error)
        }else{
            // console.log("updated")
        }

    })
 })
 app.post("/Facultylogin/Fnavbar/Update",(req,res)=>{
    const{id,emailid, mnumber, address, publication, experience, wattended,wconducted,dep}=req.body
    const sql='UPDATE facultymanagement SET Emailid=(?), mobileNo=(?), Address=(?), Publication=(?), Experience=(?), WorkshopAttended=(?),WorkshopConducted=(?),Department=(?) WHERE FacultyId=(?)';
    db.query(sql,[emailid, mnumber, address, publication, experience, wattended,wconducted,dep,id],(error)=>{
        if(error){
            console.log(error)
        }else{
            // console.log("updated")
        }

    })
 })
//  app.post("/deleteAction",(req,res)=>{
//     const {uno,n}=req.body.userdata
   
//   console.log(uno)
    
    
//     var dqsql=`DELETE FROM student WHERE regno=?`;
//     db.query(dqsql,uno,(err,result)=>{
//              //  if (err)
//              //  throw err
//              //  else{
//              //     res.send("inserted successfull")
//              //  }
//              console.log(err)
//     })
    
 
//  })

 
app.listen(8080,()=>{
    console.log("Server listening!!!!");
});