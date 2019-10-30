import { firebaseDb } from '../firebase';

const ref = firebaseDb.ref(`cards`);

const loadCards = () => {
    return dispatch => {
        ref.off();
        ref.on('value',
            (snapshot) => {dispatch(loadCardsSuccess(snapshot))},
            (error) => {dispatch(loadCardsError(error))},
        );
    }
}

const loadCardsSuccess = (snapshot) => ({
    type: 'CARDS_RECEIVE_SUCCESS',
    data: snapshot,
});

const loadCardsError = (error) => ({
    type: 'CARDS_RECEIVE_ERROR',
    message: error.message,
});


const nextCard = () => ({
    type: 'NEXT_CARD',
});

const previousCard = () => ({
    type: 'PREVIOUS_CARD',
})


const turnOverCard = () => ({
    type: 'TURN_CARD',
    
});


export default {
    loadCards,
    nextCard,
    previousCard,
    turnOverCard,
};