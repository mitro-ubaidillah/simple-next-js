import React from 'react';

const CardResult = ({ result }) => {
    return (
        <div className='p-5 border-2 bg-white'>
            <h2>
               {result}
            </h2>
        </div>
    );
}

export default CardResult;
