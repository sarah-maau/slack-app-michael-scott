const quoteService = require('./services/quote');

(async () => {
    // je m'attends à ce que la fonction me retourne la Promise d'une string
    const theQuote = await quoteService.getQuote();

    console.log(theQuote);
})();