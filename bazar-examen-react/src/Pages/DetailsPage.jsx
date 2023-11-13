import React, { useEffect, useState} from 'react'
import Search from '../Components/Search'
import Details from '../Components/Details'
import { useNavigate, useParams, Link} from 'react-router-dom';

const DetailsPage = () => {

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [producto, setProducto] = useState([]);

  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    fetch(`http://localhost:5000/api/items/${id}`)
      .then(response => response.json())
      .then(data => setProducto(data))
      .catch(error => console.error("Error al buscar el producto:", error));
  }, []);

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
      <Details key={producto.id} {...producto}/>
    </div>
  )
}

export default DetailsPage