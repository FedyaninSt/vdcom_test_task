import React from 'react';
import './NavBar.scss';
import {NavLink} from "react-router-dom";
import UserPage from '../../Resources/UserPage.svg';
import CalendarPage from '../../Resources/CalendarPage.svg';
import ReportPage from '../../Resources/ReportPage.svg';
import ExitIcon from '../../Resources/ExitIcon.svg';

function NavBar() {
    return (
        <div className='NavBar'>
            <div className='NavBar__content'>
                <h1 className='NavBar__logo'>LOGO</h1>
                <ul className='NavBar__list'>
                    <li className='NavBar__item'>
                        <NavLink to='/client'
                                 className={({isActive}) => isActive ? 'NavBar__link active' : 'NavBar__link'}>
                            <div className='NavBar__icon'>
                                <img src={UserPage} alt='icon page'/>
                            </div>
                            Total Contacts
                        </NavLink>
                    </li>
                    <li className='NavBar__item'>
                        <NavLink to='/' className={({isActive}) => isActive ? 'NavBar__link active' : 'NavBar__link'}>
                            <div className='NavBar__icon'>
                                <img src={CalendarPage} alt='icon page'/>
                            </div>
                            Calendar
                        </NavLink>
                    </li>
                    <li className='NavBar__item'>
                        <NavLink to='/' className={({isActive}) => isActive ? 'NavBar__link active' : 'NavBar__link'}>
                            <div className='NavBar__icon'>
                                <img src={ReportPage} alt='icon page'/>
                            </div>
                            Project Report
                        </NavLink>
                    </li>
                </ul>
            </div>
            <NavLink to='/login' className='NavBar__exit'>
                <img src={ExitIcon} alt='exit icon'/>
                Log out
            </NavLink>
        </div>
    );
}

export default NavBar;
