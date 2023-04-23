import React from 'react';
import CheckBox from "../UI/CheckBox/CheckBox";
import './ClientTableRow.scss';
import DeleteIcon from '../../Resources/DeleteIcon.svg'
import {useDispatch} from "react-redux";
import {removeUserList} from "../../Redux/Slice/UserSlice";
function ClientTableRow(props) {
    const dispatch = useDispatch();
    return (
        <tr className='ClientTableRow'>
            <td>
                <CheckBox id={props.id}>
                    {props.id}
                </CheckBox>
            </td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.website}</td>
            <td>
                <button onClick={()=>dispatch(removeUserList(props.id))}>
                    <img src={DeleteIcon} alt='delete icon'/>
                </button>
            </td>
        </tr>
    );
}

export default ClientTableRow;
