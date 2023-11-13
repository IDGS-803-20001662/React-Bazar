import React, { useEffect, useState} from 'react'
import Search from '../Components/Search'
import Results from '../Components/Results'
import { useNavigate, useLocation, Link } from 'react-router-dom';

const ResultsPage = () => {

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const { search } = useLocation();
  const query = new URLSearchParams(search).get('search');

  useEffect(() => {
    fetch(`http://localhost:5000/api/items?q=${query}`)
      .then(response => response.json())
      .then(data => setSearchResults(data))
      .catch(error => console.error("Error al buscar el producto:", error));
  }, [query]);

  const handleSearch = () => {
    navigate(`/items?search=${searchQuery}`);
  };

  return (
    <div className='container content-fluid'>
      <div className='row'>
        <div className='col-3'>
          <Link to={'/'}><i className='fas fa-shopping-bag fa-4x'></i></Link>
        </div>
        <div className='col-9'>
          <Search handleSearch={handleSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        </div>
      </div>
      <h4 className='mt-3 fst-italic'>Resultados de la búsqueda de "{query}"</h4>
      {searchResults.map((resultado) => (
        <Results key={resultado.id} {...resultado}/>
      ))}
      <p className='text-center text-primary mt-3'>Número de resultados: {searchResults.length}</p>
    </div>
  )
}

export default ResultsPage