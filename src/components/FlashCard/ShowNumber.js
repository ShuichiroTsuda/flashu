import React from 'react';

const ShowNumber = ({cardNum, sizeOfCards}) => {
    return(
        <div className="show-number">
            {cardNum}/{sizeOfCards}
        </div>
    );
};

export default ShowNumber;