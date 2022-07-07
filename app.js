
require('dotenv').config();
const express = require('express');
const compression = require('compression');
const connectDB = require('./config/db');
const Student = require("./model/student");
const cron = require("node-cron");
const fs = require("fs");
// require csvtojson module
const CSVToJSON = require("csvtojson");
const download = require("download");

const app = express();

connectDB()



const studentsRoute = require("./routes/studentsRoute");
// const auth = require("./routes/auth");
app.use("/students", studentsRoute);
// app.use("/auth", auth);


// Sheet download cron task
cron.schedule("*/5 * * * *", async (req, res) => {
    // File URL
    const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vTExabDrsxwjHz-QS4UpIGrmuhS8nGnBXYSwCHtmDUXvajGlVOsP72tES61uusewfyFbeOnl2-wWxlW/pub?gid=759688148&single=true&output=csv`;

         // Download the file
        (async () => {
           await download(url, "./");
        })();
    // convert users.csv file to JSON array
    CSVToJSON()
      .fromFile("./Attendanceform - Form responses 1.csv")
      .then( async(users) => {
        // users is a JSON array
        await Student.deleteMany()
        await Student.insertMany(users)
        // log the JSON array
        console.log(users);
        fs.unlinkSync("./Attendanceform - Form responses 1.csv");
      })
      .catch((err) => {
        // log error if any
        console.log(err);
      });

    console.log("running a task every minute");
  })


const port = process.env.PORT || 3000
app.listen(port, function(){
    console.log("server is running on port 3200");
});


