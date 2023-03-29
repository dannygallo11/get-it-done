import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/ProgressBar.css';

function TaskCompletionBar() {
    const percentage = 70;
    const barColor = percentage < 50 ? "orange" : percentage > 49 || percentage < 100 ? "yellow" : "green";

    return <ProgressBar now={percentage} label={`${percentage}%`}/>
};

export default TaskCompletionBar;


// style={{backgroundColor: barColor}}
