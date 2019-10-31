import React from 'react';

const AddCard = (onClick) => {
    var question;
    var answer;
    return(
        <div className="container">
            <div className="field">
                <label className="label">Question</label>
                <input
                    className="input"
                    value={question}
                />
            </div>
            <div className="field">
                <label className="label">Answer</label>
                <input
                    className="input"
                    value={answer}
                />
            <div className="control">
                {question && 
                answer && (
                    <button className="button is-link" onClick={onClick}>
                        Submit
                    </button>
                )}
            </div>
        </div>
    </div>
    );
}

export default AddCard;