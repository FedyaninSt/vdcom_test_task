import React from 'react';
import './Pagination.scss';

function Pagination({paginationValue, fun, pagination}) {
    return (
        <div className='Pagination'>
            <button onClick={() => fun(paginationValue - 1)} className='Pagination__btn arrow'>&#60;</button>
            {
                pagination.map(item =>
                    <button
                        className={paginationValue == item ? 'Pagination__btn active' : 'Pagination__btn'}
                        key={item + 'pagination'}
                        onClick={(e) => fun(e.currentTarget.textContent)}>
                        {item}
                    </button>
                )
            }
            <button onClick={() => fun(paginationValue + 1)} className='Pagination__btn arrow'>&#62;</button>
        </div>
    );
}

export default Pagination;
