const express = require("express");
const router = express.Router();
const {Employee} = require("../models/employees");

//POST
router.post("/api/employee/add", (req, res) => {
    const emp = new Employee({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    emp.save((err, data) => {
      res
        .status(200)
        .json({
          code: 200,
          message: "Employee added succesfully",
          addEmployee: data,
        });
    });
  });

  //Get Single Employee
router.get("/api/employee/:id", (req, res) => {
    Employee.findById(req.params.id, (err, data) => {
      if (!err) {
        res.send(data);
      } else {
        console.log(err);
      }
    });
  });

  //Put

  router.put("/api/employee/edit/:id", (req, res) => {
    const emp = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    Employee.findByIdAndUpdate(
      req.params.id,
      { $set: emp },
      { new: true },
      (err, data) => {
        if (!err) {
          res
            .status(200)
            .json({
              code: 200,
              message: "Employee updated successfully",
              updateEmployee: data,
            });
        } else {
          console.log(err);
        }
    });
});

//delete

router.delete("/api/employee/:id", (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, data) => {
      if (!err) {
        res
          .status(200)
          .json({
            code: 200,
            message: "Employee deleted successfully",
            deleteEmployee: data,
          });
      }
    });
  });




// router.post("/api/employee/add",(req,res)=>{
//     const emp = new Employee({
//         name:req.body.name,
//         email:req.body.email,
//         password:req.body.password
//     });
//     emp.save((err,data)=>{
//         res
//         .status(201)
//         .json({
//             code:201,
//             message:"Employee Added successfully",
//             addEmployee:data
//         });
//     });
// });
 module.exports = router;