import ActionTypes from '../actions/actionTypes';

const initialState = {
    results: [],
    current: "https://swapi.co/api/people/",
    previous: undefined,
    next: undefined
};

const starwarsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_CHARACTERS: {
            const { charactersProps } = action.payload;
            return {
                ...state,
                ...charactersProps,
            };
        }

        default:
            return state;
    }
};

export default starwarsReducer;
