import { firebaseDb } from '../firebase';

const ref = firebaseDb.ref(`cards`);

const pushCard = (question, answer) => {
    return dispatch => {
        ref.off();
        ref.push({
            question: question,
            answer: answer,
        }).catch(error => dispatch({
            type: 'PUSH_CARD_ERROR',
            message: error.message,
        }));
    }
}

export default pushCard;
