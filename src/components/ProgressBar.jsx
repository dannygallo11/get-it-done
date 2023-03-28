import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import "bootstrap/dist/css/bootstrap.min.css";

function TaskCompletionBar() {
  return (
    <div>
        <ProgressBar now={20}/>
    </div>
  )
};

export default TaskCompletionBar;
