const initialState = {
    card: {
    cards: {},
    sizeOfCards: 0,
    cardNum: 1,
    isCardFront: true,
    loading: true,
    }
};

export const card = (state = initialState, action) => {
    switch (action.type) {
        case 'CARDS_RECEIVE_SUCCESS':
            if (action.data) {
                return({
                    ...state,
                    card: {
                        ...state.card,
                        cards: Object.values(action.data.val()),
                        sizeOfCards: action.data.numChildren(),
                        cardNum: state.card.cardNum,
                        loading: false,
                    }
                });
            }
            return state;

        case 'CARDS_RECEIVE_ERROR':
            alert(action.message);
            break;
        
        case 'NEXT_CARD':
            if (state.card.cardNum < state.card.sizeOfCards) {
                return({
                    ...state,
                    card: {
                        ...state.card,
                        isCardFront: true,
                        cardNum: state.card.cardNum + 1,
                    }
                });
            } else if (state.card.cardNum === state.card.sizeOfCards) {
                return({
                    ...state,
                    card: {
                        ...state.card,
                        isCardFront: true,
                        cardNum: 1,
                    }
                });
            } else {
                return state;
            }
        
        case 'PREVIOUS_CARD':
            state.card.isCardFront = true;
            if (state.card.cardNum > 1) {
                return({
                    ...state,
                    card: {
                        ...state.card,
                        isCardFront: true,
                        cardNum: state.card.cardNum - 1,
                    }
                });
            } else if (state.card.cardNum === 1) {
                return({
                    ...state,
                    card: {
                        ...state.card,
                        isCardFront: true,
                        cardNum: state.card.sizeOfCards,
                    }
                });
            } else {
                alert("PREVIOUS_CARD error\n state: " + state);
            }
            return state;

        case 'TURN_CARD':
            return ({
                ...state,
                card: {
                    ...state.card,
                    isCardFront: !state.card.isCardFront,
                },
            })
        default:
            return state;
    }
}


