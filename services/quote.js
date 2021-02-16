const fetch = require('node-fetch');

/**
 * Generates a Michael Scott's quote based on a external API
 * @returns {Promise<string>} the Michael Scott's quote promise
 */

const getQuote = async () => {
    const response = await fetch('https://michael-scott-quotes.herokuapp.com/quote');
    const theQuote = await response.json();

    return theQuote.quote;
};

module.exports = {
    getQuote
};