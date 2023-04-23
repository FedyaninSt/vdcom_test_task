import React from 'react';
import './ClientTable.scss';
import CheckBox from "../UI/CheckBox/CheckBox";
import ClientTableRow from "../ClientTableRow/ClientTableRow";
import {CSSTransition, TransitionGroup} from "react-transition-group";

function ClientTable({list}) {
    return (
        <table className='ClientTable'>
            <thead className='ClientTable__thead'>
            <tr>
                <td>
                    <CheckBox>Client ID</CheckBox>
                </td>
                <td>
                    Client name
                </td>
                <td>
                    email
                </td>
                <td>
                    phone
                </td>
                <td>
                    website
                </td>
                <td>
                    Action
                </td>
            </tr>
            </thead>
            <tbody>
            {
                list.map(user =>
                    <ClientTableRow
                        key={user.id+"tbodyRow"}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        phone={user.phone}
                        website={user.website}
                    />
                )
            }
            </tbody>
        </table>
    );
}

export default ClientTable;
