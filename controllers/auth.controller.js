const Admin = require("../model/admin");

signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });

    if (!admin)
      return res.status(401).json({
        Error: "admin email doesnot exist",
      });

    if (validate.password !== password) {
      console.log(validate);
      return res.status(401).json({
        Error: "Password didnt match",
      });
    }

    return res.status(200).json({
      email: validate.email,
      password: validate.password,
    });
  } catch (error) {
    //do something
    console.log(error);
  }
  next();
};
