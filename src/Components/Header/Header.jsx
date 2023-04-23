import React from 'react';
import './Header.scss';
import SearchBar from "../UI/SearchBar/SearchBar";
import userCover from '../../Resources/user.png'
function Header({searchValue, search}) {
    return (
        <div className='Header'>
            <div className='Header__container'>
                <SearchBar searchValue={searchValue} search={search} placeholderValue='Search by Name...'/>
                <div className='Header__user'>
                    <div className='Header__cover'>
                        <img src={userCover}/>
                    </div>
                    <div className='Header__info'>
                        <p className='Header__name'>Mr. Director</p>
                        <p className='Header__work'>Managing Director</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
