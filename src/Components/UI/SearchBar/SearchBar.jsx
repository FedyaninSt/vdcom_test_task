import React from 'react';
import './SearchBar.scss';
import SearchIcon from '../../../Resources/SearchIcon.svg';

function SearchBar({placeholderValue, search, searchValue}) {
    return (
        <div className='SearchBar'>
            <img src={SearchIcon} alt='search icon'/>
            <input onChange={(e) => search(e.currentTarget.value)} className='SearchBar__input' type='text' placeholder={placeholderValue} value={searchValue}/>
        </div>
    );
}

export default SearchBar;
