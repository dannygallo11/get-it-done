import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ActionCard from './css/ActionCard';
// import Button from 'react-bootstrap/Button';
// import ActionItem from './components/ActionItem';
// import TaskCompletionBar from './components/ProgressBar';

// used for backend to connect to mongoDB
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

// Connection point for DB
mongoose.connect("mongodb://locoalhost:27017/GetItDoneDB");

//Input data
// 1. Creating DB Schema
const actionItemsSchema = new mongoose.Schema({
  _id: Number,
  cr_date: Date,
  due_date: Date,
  status: String,
  item: String,
  action_type: String,
  ckbx_value: Boolean,
  prio_value: Boolean,
  deadline_task: String,
  deadline_date: Date
});

// 2. Create Mongoose Model. This will create a collection (it will convert collection name to plural)
const ActionItem = mongoose.model("actionitem", actionItemsSchema);

// 3. Create data
// create new document with existing model
const actionItem = new ActionItem ({
  _id: 1,
  cr_date: new Date(),
  due_date: new Date(),
  status: "not started",
  item: "code MongoDB connection",
  action_type: "Coding",
  ckbx_value: false,
  prio_value: true,
  deadline_task: "Connect to DB",
  deadline_date: 2023-05-30
});

// 4. Save document
actionItem.save();




// App component
function App() {
  return (
    <div>
      <ActionCard />
    </div>
  );
}

export default App;

