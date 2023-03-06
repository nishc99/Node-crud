// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();

// app.use(bodyParser.json());

// const dotenv = require("dotenv");
// const connectDB = require("./config/db");

// dotenv.config({ path: "./config/config.env" });

// connectDB();
//routes
// app.use("/", require("./routes/index"));
// app.listen(3005);




const bodyParser = require("body-parser");
const express = require("express");
const app = express();


//Middleware
app.use(bodyParser.json())

const dotenv = require("dotenv"); 
const connectDB = require("./config/db");

dotenv.config({
  path:"./config/config.env"
})

connectDB()

//Routes

app.use("/",require("./routes/index"))
app.listen(3005)




















// const express = require("express");
// const mongoose = require('mongoose');
// //const { default: mongoose } = require("mongoose");
// const app = express();
// app.use(express.json());


//db connection

// const database = (module.exports = () => {
//     const connectionParams = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     };
  
//     try {
//       mongoose.connect(
//          "mongodb://127.0.0.1:27017/mynewdb?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0",
//         //"mongodb://localhost:27017/e-commerse",
//         //"mongodb://localhost:27017/mynewdb",
//         connectionParams
//       );
//       console.log("mongoDb connected Successfully");
//     } catch (error) {
//       console.log(error);
//       console.log("Database connection failed");
//     }
//   });

// database();

//SCHEMA

// const sch={
//     name:String,
//     email:String,
//     id:Number
// }
// const monmodel=mongoose.model("NEWCOL",sch);

//POST

// app.post("/post",async(req,res)=>{
//     console.log("inside post function");

//     const data=new monmodel({
//         name:req.body.name,
//         email:req.body.email,
//         id:req.body.id
//     });

//     const val=await data.save();
//     res.json(val);
    //res.send("posted");
//})

//PUT

// app.put("/", async (req,resp)=>{
//   let data = await dbConnect();
//   let result = data.updateOne(
//     {name: "nishchal"},
//     { $set:{id:4}}
//     )
//   resp.send({result:"update"})
// })

// app.put("/update/:id",async(req,res)=>{
//   let upid=req.params.id;
//   let upname=req.body.name;
//   let upemail=req.body.email;

//   monmodel.updateMany({id:upid},{$set:{name:upname,email:upemail}},{new:true},(err,data)=>{
//     if(err)
//     {
//       res.send("ERROR")
//     }else{
//         if(data==null)
//         {
//           res.send("nothing found")
//         }else{
//         res.send(data)
//         }
//       }

//       })


  //Another Method
// app.put('/update/:id', (req, res) => {
//    let upid=req.params.id;
//    let upname=req.body.name;
//    let upemail=req.body.email;

// monmodel.updateOne({id:upid}, {$set:{name:upname,email:upemail}},{new:true},(err,data) => {
//   if(!err) {
//       res.status(200).json({ code:200, message: 'Employee updated successfully', 
//       update: data })
//   } else {
//       console.log("no data");
//   }
// });
// });

 //get or fetch

//  app.get('/fetch/:id',function(req,res){
//   fetchid=req.params.id;
//   monmodel.find(({id:fetchid}),function(err,val){

//     res.send(val);
//   })
//  })






// app.listen(4000,()=>{
//     console.log("on port 4000")
// })



























// const express = require('express');
// const app = express();
// const mongoose = require("mongoose");
// app.use(express.json())

// //DB CONNECTION
// mongoose.connect("mongodb://localhost:27017/mynewdb",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// },(err)=>{
//     if(!err)
//     {
//         console.log("connected to db")
//     }else{
//         console.log("error") 
//     }
// })

// app.listen(4000, () => {
//     console.log("server is running on port 4000")
// })