import React from 'react'
import Card from 'react-bootstrap/Card';
import ActionItem from '../components/ActionItem';
import TaskCompletionBar from '../components/ProgressBar';

const ActionCard = () => {

    // let todaysDate = new Date();
    // let date = date.getDate;
    // let month = date.getMonth + 1;

  
  return (
    <Card className="text-center" style={{ width: '12rem'}}>
        <Card.Header>{new Date().toLocaleString() + ""}</Card.Header>
        <Card.Body>
            {/* <Card.Title>Complete  |  Action   |   Priority</Card.Title> */}
            <Card.Text><ActionItem/></Card.Text>
            <Card.Text><ActionItem/></Card.Text>
            <Card.Text><ActionItem/></Card.Text>
        </Card.Body>
        <Card.Footer><TaskCompletionBar/></Card.Footer>

    </Card>
  )
};

export default ActionCard;