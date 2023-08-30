const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const Employee = require("./models/Employee");

const PORT = process.env.PORT || 4000;

const app = express();

// set up db connection

const DB_URL = process.env.DB_URL;

async function connect() {
  try {
    const conn = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (conn) {
      console.log(`Connected to db ${conn.connections[0].name}`);
    }
  } catch (err) {
    console.log(`Error connecting to db ${err.message}`);
  }
}

// set up body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set up cors
app.use(cors());

app.get("/", (req, res) => {
  res.redirect("/api");
});

app.get("/api", (req, res) => {
  res.send("API ROUTES");
});

// get the list of employee endpoint
app.get("/api/emp", async (req, res) => {
  try {
    const emp = await Employee.find();
    res.status(200).json(emp);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// add new employee endpoint
app.post("/api/emp", async (req, res) => {
  try {
    const { firstName, lastName, email, phone } = req.body;
    const new_emp = await Employee.create({
      firstName,
      lastName,
      email,
      phone,
    });
    res.status(201).json(new_emp);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// get a single employee endpoint
app.get("/api/emp/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const emp = await Employee.findOne({ _id: id });
    res.status(200).json(emp);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// update one employee endpoint
app.put("/api/emp/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmp = await Employee.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      useFindAndModify: false,
    });
    res.status(200).json(updatedEmp);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// delete one employee endpoint
app.delete("/api/emp/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Employee.findOneAndDelete({ _id: id });
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json(err.message);
  }
});

app.listen(PORT, async () => {
  console.log(`App started on port ${PORT}`);
  await connect();
});
