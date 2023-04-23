import React, {useEffect, useMemo, useState} from 'react';
import './ClientList.scss';
import NavBar from "../../Components/NavBar/NavBar";
import Header from "../../Components/Header/Header";
import ClientContent from "../../Components/ClientContent/ClientContent";
import {useDispatch, useSelector} from "react-redux";
import {addUserList} from "../../Redux/Slice/UserSlice";
import {GetUserList} from "../../API/GetUser";

function ClientList() {
    const dispatch = useDispatch();
    const userList = useSelector(state => state.User.userList)
    const [loading, setLoading] = useState(false);
    const [paginationPage, setPaginationPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {
        dispatch(GetUserList(setLoading));
    }, [])

    const searchList = useMemo(() => {
        return userList.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
    }, [userList, searchValue, paginationPage])
    const changePage = (value) => {
        setLoading(false);
        dispatch(GetUserList(setLoading, {page: value, limit: 5}))
        setPaginationPage(value);
    }
    return (
        <div className='ClientList'>
            <Header searchValue={searchValue} search={setSearchValue}/>
            <NavBar/>
            <ClientContent
                paginationPage={paginationPage}
                userList={searchList}
                changePage={changePage}
                loading={loading}
            />
        </div>
    );
}

export default ClientList;
