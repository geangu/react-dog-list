import Header from '../components/Header';
import DogList from '../components/DogList';
import { useState } from 'react';

const Home = () => {
  const [selectedBreed, setSelectedBreed] = useState('hound');

  return (
    <>
      <Header onChangeBreed={setSelectedBreed} />
      <DogList breed={selectedBreed} />
    </>
  );
};

export default Home;
