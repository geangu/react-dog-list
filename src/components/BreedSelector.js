import { useEffect, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import api from '../helpers/api.helper';

const BreedSelector = ({ onChangeBreed }) => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const getBreeds = async () => {
      const result = await api.getBreeds();
      setBreeds(result);
    };

    getBreeds();
  }, []);

  return (
    <NavDropdown title="Breeds" id="basic-nav-dropdown">
      {breeds.map((breed, index) => (
        <NavDropdown.Item key={index} onClick={() => onChangeBreed(breed)}>
          {breed}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

export default BreedSelector;
