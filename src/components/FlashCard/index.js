import React from 'react';
import MoveButton from './MoveButton';
import 'bulma/css/bulma.css';
import TurnOverButton from './TurnOverButton';
import Card from './Card';
import ShowNumber from './ShowNumber';


const FlashCard = ({...state}) => {
    return(
        <div className="card-panel">
            <ShowNumber {...state} />
            <TurnOverButton {...state} />
            <MoveButton {...state} />
            <Card {...state} />
        </div>
    );
}

export default FlashCard;

