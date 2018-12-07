const initialState = {
    test: 'test value',
    messages: ['a demo message'],
};

const testReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'LOAD_MESSAGES':
            return Object.assign({}, state, {
                messages: action.messages,
            });

            case 'IMPORT_MESSAGE':
            const newMessages = state.messages.slice(0);
            newMessages.unshift(action.message);            
            return Object.assign({}, state, {
                messages: newMessages,
            });

        // case 'SET_TEST':
        //     return Object.assign({}, state, {
        //         test: action.test
        //     });
        default:
            return state;

        }

 
};

export default testReducer;