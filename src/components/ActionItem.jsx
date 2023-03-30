import React from 'react'
import Form from 'react-bootstrap/Form';
import '../css/ActionItems.css';

const ActionItem = () => {
  return (
    <div className="action-container">
        <div className="action-checkbox"><input type="checkbox"></input></div>
        <div className="action-item"><p>practice user story</p></div>
        <div className="action-priority"><Form.Check type="switch" label="Priority?"/></div>
    </div>
  )
}

export default ActionItem;