import React from 'react';

const MoveButon = ({previousCard, nextCard}) => {
    return(
        <div>
            <button
                className="previous-card"
                onClick={previousCard}
            >
                PREVIOUS
            </button>
            <button
                className="next-card"
                onClick={nextCard}
            >
                NEXT
            </button>
        </div>
    );
}

export default MoveButon;
