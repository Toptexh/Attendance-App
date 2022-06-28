const Student = require("../model/student");

module.exports = {
  // find all students
  findAll: (req, res) => {
    
    const allStudent = Student.find()
    if(allStudent.length === 0) return res.status(404)
        .json({msg: 'No student record at this time'})
    res.status(200).json({
        success: true,
        msg: 'Student record fetch successfully',
        data: allStudent
    })
  },

// Delete a Student with the specified object id in the request
deleteStudent: (req, res) => {
    const deletestudentId = req.params.id;
    if(deleteStudentId === 0) return res.status(404)
    .json({msg: 'No student record at this time'})
    res.status(200).json({
        success: true,
        msg: 'Student record fetch successfully',
        data: allStudent
    })
  },
   // res.status(200).json({
    //success: true,
  //  msg: 'Student record fetch successfully',
    //data: allStudent
//})
//     const newStudents = Student.filter((student) => student.id !== +studentId);
//     res.status(201).json(newStudents);
//     // Student.findDelete(req.params.id)
//     // .then(student => {
//     //     if(!student) return res.status(404)
//     //     .json({
//     //          success: false,
//     //          message: `Student with id ${req.params.id} could not be deleted`
//     //         });
//     //     res.status (200)
//     //     .json({
//     //         success: true,
//     //         message: `Student with id ${req.params.id} have been deleted`
//     //     });

//     // }).catch(err => {
//     //     res.status(404)
//     //     .json({
//     //         success: false,
//     //         message: `Student with id ${req.params.id} is not deleted`
//     //     })
//     //     res.status(200)
//     //       json({
//     //           success: true,
//     //           message: `Student with id ${req.params.id} is deleted`
//     //       });
//     //   });
//   },

// Find a single Student with Index no.
search: (req, res) => {
    
    const searchStudent = Student.find()
    if(searchStudent.length === 0) return res.status(404)
        .json({msg: 'No student record at this time'})
    res.status(200).json({
        success: true,
        msg: 'Student record fetch successfully',
        data: allStudent
    })
  },


// search: (req, res) => {
//    const studentId = req.params.id;
//      const foundStudent = Student.find((student) => student.id === +studentId);
//      if (!foundStudent) {
//        res.status(404).json({
//          message: "doesn't exist",
//          success: false,
//        });
//      }
  //   res.status(200).json(foundStudent);
//     // Student.find({ indexNo: studnetIndexNo }, '-attendance')
//     // .then(student => { if(!student)
//     //         return res.status(404).json({
//     //             success: false,
//     //             message: `Student with id ${req.params.id} could not found`
//     //         });
//     //         res.status
//     //         .json({
//     //             success: true,
//     //             message: `Student with id ${req.params.id} have been found`
//     //         });
//     // }).catch(err => {
//     //         res.status(404).json({
//     //             success: false,
//     //             message: `Student with id ${req.params.id} have been found`
//     //         });
//     //      res.status(200).json({
//     //          success: true,
//     //          message: `Student with id ${req.params.id} have been found`
//     //     });
//     // });
//   },

//   //search
//   // search: (req, res) => {
//   //     Student.search({})
//   //     .then(student => { if(!student)
//   //             return res.status(404).json({
//   //                 success: false,
//   //                 message: "Search failed"
//   //             });
//   //             res.status
//   //             .json({
//   //                 success: true,
//   //                 message: "search is successful"
//   //             });
//   //     }).catch(err => {
//   //             res.status(404).json({
//   //                 success: false,
//   //                 message: "search has been failed"
//   //             });
//   //          res.status(200).json({
//   //              success: true,
//   //              message: "search is done"
//   //         });
//   //     });
//   // },
};
