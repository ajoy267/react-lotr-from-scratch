import React from 'react';
import { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characters';
import CharactersList from '../../components/Characters/CharactersList';

export default function Characters() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetchCharacters('All');
      setCharacter(response);
    };
    getCharacter();
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <CharactersList chars={character} />
    </div>
  );
}
