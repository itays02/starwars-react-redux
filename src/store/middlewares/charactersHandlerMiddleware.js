import actionTypes from '../actions/actionTypes';
import starwarsHelper from '../helpers/starwarsHelper';

const printLog = (pageUrl) => {
    const pageIndex = pageUrl.indexOf('page');
    const pageNum = (pageIndex > -1) ? pageUrl.substring(pageIndex) : 'page=1';
    console.log("The data fetched from the server successfully! (" + pageNum + ")");
};

const getCharactersProps = async (pageUrl) => {
    const response = await starwarsHelper.getCharactersData(pageUrl);
    if(response){
        printLog(pageUrl);
        return {
            current: pageUrl,
            results: response.results || [],
            previous: response.previous,
            next: response.next
        };
    }
    return undefined;
};

const charactersHandlerMiddleware = store => next => async action => {
    switch (action.type) {
        case (actionTypes.FETCH_CHARACTERS): {
            const charactersProps = await getCharactersProps(action.payload.pageUrl);
            if(charactersProps){
                return next({type: actionTypes.FETCH_CHARACTERS, payload: {charactersProps}});
            }
            return next(action);
        }

        default:
            return next(action);
    }
};

export default charactersHandlerMiddleware;
