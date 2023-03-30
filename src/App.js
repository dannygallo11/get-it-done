import React from 'react';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import ActionItem from './components/ActionItem';

// import TaskCompletionBar from './components/ProgressBar';


function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Button>This is button</Button>
      <ActionItem />
    </div>
  );
}

export default App;
