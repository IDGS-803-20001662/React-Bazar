import React, { useState} from 'react'
import Search from '../Components/Search'
import { useNavigate, Link, } from 'react-router-dom';

const HomePage = () => {
  
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    navigate(`/items?search=${searchQuery}`);
  };

  return (
    <div className='container text-center mt-5'>
      <i className='fas fa-shopping-bag fa-5x'></i>
      <h1 className='mt-3 fst-italic'>Bazar Online</h1>
      <div className='mt-3'>
        <Search handleSearch={handleSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <button className='btn btn-info mt-5' type='button' onClick={handleSearch}>Buscar</button>
      </div>
    </div>
  )
}

export default HomePage