import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ActionCard from './css/ActionCard';

// used for backend to connect to mongoDB
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();


// import Button from 'react-bootstrap/Button';
// import ActionItem from './components/ActionItem';
// import TaskCompletionBar from './components/ProgressBar';

// Connection point for DB
mongoose.connect("mongodb://locoalhost:27017/getitdoneDB");

//Creating DB Schema
const actionItems = {
  key:Number,
  Date:Date,
  Ckbx_value:Boolean,
  item:String,
  prio_value:Boolean
}

function App() {
  return (
    <div>
      <ActionCard />
    </div>
  );
}

export default App;
