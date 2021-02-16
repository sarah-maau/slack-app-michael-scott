// dans l'administration de Slack, il faut créer une nouvelle app
// et l'autoriser à poster via un Webhook dans un channel précis
// le webhook n'est rien de plus qu'une url à laquelle nous enverrons nos messages à poster (ici, des blagues sur Chuck)

require('dotenv').config();

// pour envoyer le message
const fetch = require('node-fetch');

// pour récupérer la citation
const { getQuote } = require('./services/quote');

(async () => {

    // l'API de Slack a besoin d'un payload respectant un format bien particulier
    // https://api.slack.com/reference/messaging/payload
    const body = {
        text: await getQuote()
    }

    fetch(process.env.SLACK_WEBHOOK, {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    });

})();