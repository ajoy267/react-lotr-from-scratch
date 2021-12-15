import React from 'react';
import { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characters';
import CharactersList from '../../components/Characters/CharactersList';
import Controls from '../../components/Controls/Controls';

export default function Characters() {
  const [character, setCharacter] = useState([]);
  const [query, setQuery] = useState('');
  const [race, setRace] = useState('All');

  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetchCharacters(race, query);
      setCharacter(response);
    };
    getCharacter();
  }, [race, query]);

  const handleClick = async () => {
    const response = await fetchCharacters(race, query);
    setCharacter(response);
  };

  return (
    <div>
      <h1>Characters</h1>
      <Controls
        query={query}
        setQuery={setQuery}
        race={race}
        setRace={setRace}
        handleClick={handleClick}
      />
      <CharactersList chars={character} />
    </div>
  );
}
