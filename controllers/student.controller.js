const Student = require("../model/student");

module.exports = {
  
  // find all students
  findAll : (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};
    Student.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving students."
        });
      });
  },

  // Delete a Student with the specified object id in the request
  deleteStudent: (req, res) => {
    const id = req.params.id;
    Student.findOneAndDelete({id})
      .then(data => {
        if (!data) {
          res.status(404).json({
            message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
          });
        } else {
          res.json({
            message: "Student was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "Could not delete Student with id=" + id
        });
      });
  },

  // Find a single Student with Index no.
  search: (req, res) => {
    const id = req.params.id;
    Student.findOne({id})
      .then(data => {
        if (!data)
          res.status(404).json({ message: "Not found Student with id " + id });
        else res.json(data);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "Error retrieving Student with id=" + id });
      });
  }
};