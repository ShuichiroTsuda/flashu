export const addCard = (action) => {
    switch(action.type) {
        case 'ADD_CARD_ERROR':
            alert(action.message)
            break;
    }
}