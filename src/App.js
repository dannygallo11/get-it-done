import React from 'react';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Button>This is button</Button>
      <ProgressBar now={20}/>
    </div>
  );
}

export default App;
