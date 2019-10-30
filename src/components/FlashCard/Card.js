import React from 'react';

const Card = ({isCardFront, cards, cardNum, loading}) => {
    return(
        <div className="card">
            <div className="content">
                <p>
                    { !loading ? (isCardFront ?
                        cards[cardNum - 1].question :
                        cards[cardNum - 1].answer) :
                        "LOADING"
                    }
                </p>
            </div>
        </div>
    );
};

export default Card;