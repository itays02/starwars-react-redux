import actionTypes from './actionTypes';

export const fetchNewCharacters = (url) => ({
    type: actionTypes.FETCH_CHARACTERS,
    payload: {
        pageUrl: url
    },
});