import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import api from '../helpers/api.helper';
import DogCard from './DogCard';
import DogModal from './DogModal';

const DogList = ({ breed }) => {
  const [dogs, setDogs] = useState([]);
  const [selectedDog, setSelectedDog] = useState();

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (dog) => {
    setShowModal(true);
    setSelectedDog(dog);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const getDogs = async () => {
      const result = await api.getDogsByBreed(breed);
      setDogs(result);
    };
    if (breed) {
      getDogs();
    }
  }, [breed]);

  return (
    <Container>
      <h1>{breed}</h1>
      <Row className="mt-5">
        {dogs.map((dog, index) => (
          <Col key={index} xs={6} sm={4} md={2}>
            <DogCard
              dog={dog}
              breed={breed}
              onClick={() => handleOpenModal(dog)}
            />
          </Col>
        ))}
      </Row>
      <DogModal
        show={showModal}
        dog={selectedDog}
        breed={breed}
        handleClose={handleClose}
      />
    </Container>
  );
};

export default DogList;
