const websocketInitialState = {};

export const socketReducer = (state = { ...websocketInitialState }, action) => {
    switch (action.type) {
        case 'WS_CONNECT':
            return { ...state, host: action.host };
        default:
            return state;
    }
};