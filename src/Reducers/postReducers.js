const initialState = [];

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'POST': 
        return [...state, action.payload];
        case 'DELETE':
            return state.filter((post, i) => i !== action.payload);
            default:
                return state;
    }
}