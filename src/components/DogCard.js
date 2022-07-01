import React from 'react';
import { Button, Card } from 'react-bootstrap';

const DogCard = ({ breed, dog, onClick }) => {
  const handleClick = (breed, dog) => {
    onClick(dog);
  };

  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={dog} />
      <Card.Body>
        <Card.Title>{breed}</Card.Title>
        <Button onClick={() => handleClick(breed, dog)} variant="primary">
          See details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DogCard;
