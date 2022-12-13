import React, { useState } from 'react';
import { TableBodyTypes } from './types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillPersonLinesFill } from "react-icons/bs";

function TableBody({user, index,}:TableBodyTypes) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <tr >
        <td><img src={user.image} alt={`${user.firstName} ${user.lastName}`}></img></td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td style={{cursor:'pointer'}} onClick={handleShow}><BsFillPersonLinesFill/></td>
      </tr>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <React.Fragment key ={`details ${index}`}>
              <div> {user.firstName} {user.lastName}'s details</div>
              <div> Street: #{user.location.street.number} {user.location.street.name}</div>
              <div> City: {user.location.city} </div>
              <div> State: {user.location.state} </div>
              <div> Postal Code: #{user.location.postcode} </div>
            </React.Fragment>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TableBody