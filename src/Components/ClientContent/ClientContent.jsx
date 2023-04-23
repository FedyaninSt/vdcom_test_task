import React, {useEffect, useState} from 'react';
import './ClientContent.scss'
import Button from "../UI/Button/Button";
import ClientTable from "../ClientTable/ClientTable";
import {useDispatch, useSelector} from "react-redux";
import {GetUserList} from "../../API/GetUser";
import Pagination from "../UI/Pagination/Pagination";
import Modal from "../Modal/Modal";
import AddUserList from "../AddUserList/AddUserList";

function ClientContent({paginationPage, userList, changePage, loading}) {
    const [modal, setModal] = useState(false);
    return (
        <div className='ClientContent'>
            <div className='ClientContent__header'>
                <h2 className='ClientContent__title'>Total Contacts</h2>
                <Button fun={() => {setModal(true)}}>Add +</Button>
            </div>
            {
                loading ?
                    <ClientTable list={userList}/> :
                    <div>loading</div>
            }
            <div className='ClientContent__pagination'>
                <Pagination paginationValue={paginationPage} fun={changePage} pagination={[1, 2]}/>
            </div>
            <Modal modal={modal} setModal={setModal}>
                <AddUserList setModal={setModal}/>
            </Modal>
        </div>
    );
}

export default ClientContent;
