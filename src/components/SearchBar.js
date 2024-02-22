
import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({onSearch}) => {
    const [query,setQuery]=useState('');
    const [year,setYear]=useState('');
    const [type,setType]=useState('');
const handleSubmit =(e)=>{
    e.preventDefault();
    onSearch(query,year,type);
}
  return (
    <form className='search-bar' onSubmit={handleSubmit}>
    <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Film Ara'/>
    <input type='text' value={year} onChange={(e)=>setYear(e.target.value)} placeholder='Yıl Ara'/>
    <input type='text' value={type} onChange={(e)=>setType(e.target.value)} placeholder='Tür Ara'/>
    <button type='submit'>Ara</button>
    </form>
  )
}

export default SearchBar