const axios = require('axios');

class StarwarsHelper {
    static async getCharactersData(charactersUrl) {
        return axios.get(charactersUrl)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export default StarwarsHelper;