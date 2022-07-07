const router = require("express").Router();
const studentController = require("../controllers/student.controller");
const {findAll, deleteStudent, search} = studentController;

router.get("/", findAll);
router.delete("/:id", deleteStudent);
router.get("/:id", search);

module.exports = router;