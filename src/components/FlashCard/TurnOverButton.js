import React from 'react';

const TurnOverButton = ({turnOverCard, isCardFront}) => {
    return(
        <button
        className="turn-over-card"
        onClick={turnOverCard}
        >
        {isCardFront ? 'Answer' : 'Question'}
        </button>
    );
};

export default TurnOverButton;