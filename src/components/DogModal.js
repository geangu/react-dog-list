import React from 'react';
import { Button, Figure, Modal } from 'react-bootstrap';

const DogModal = ({ show = false, breed, dog, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{breed}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {dog && (
          <Figure>
            <Figure.Image width={171} height={180} alt="171x180" src={dog} />
            <Figure.Caption>{breed}</Figure.Caption>
          </Figure>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DogModal;
