import React from 'react';
import Button from 'react-bootstrap/Button';
import TaskCompletionBar from './components/ProgressBar';


function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Button>This is button</Button>
      <TaskCompletionBar/>
    </div>
  );
}

export default App;
