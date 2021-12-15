import { useState, useEffect } from 'react';
import FilmsList from '../../components/Films/FilmsList';
import { fetchFilms } from '../../services/films';

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const response = await fetchFilms();
      setFilms(response);
    };
    getFilms();
  }, []);

  return (
    <div>
      <h1>Films</h1>
      <FilmsList films={films} />
    </div>
  );
}
