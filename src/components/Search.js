import React, { useState } from 'react'
import {MdSearch} from 'react-icons/md';

function Search({onSearch}) {

    const [search, setSearch] = useState('');
    const searchNote = (event) => {
        setSearch(event.target.value);
        onSearch(search);
    }
  return (
    <div className='search'>
        <MdSearch className='search-icons' size='1.5em' />
        <input value={search} onChange={searchNote} type='text' placeholder='Type to search' />
    </div>
  )
}

export default Search