import Reacts from 'react'

const Search = ({ handleSearch, searchQuery, setSearchQuery }) => {

  return (
    <div className='text-center input-group mt-3'>
      <button className='btn btn-outline-info' type='button' onClick={handleSearch}><i className='fas fa-search'></i></button>
      <input type='text' className='form-control' placeholder='Buscar producto...' value={searchQuery} onChange={e => setSearchQuery(e.target.value)}></input>
    </div>
  )
}

export default Search