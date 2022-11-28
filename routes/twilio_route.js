const express = require('express');
const router = express.Router();

const DIALOGFLOW_API = require('../helper_functions/dialogflow_api');

router.post('/twilio', async (req, res) => {

    if (!Object.keys(req.body).length) {

        console.error('Request has no body.')
        res.sendStatus(200);

    } else {
        let body = req.body;

        let senderId = body.From;
        let message = body.Body;

        try {
            let intentData = await DIALOGFLOW_API.detectIntent(
                'en-US',
                message,
                `twilio${senderId}`
            );

            console.info(intentData);

            // We want to send this response to DB...

        } catch (error) {
            console.error(`Error at twilio route - ${error}`);
        }

        res.sendStatus(200);
    }
});

module.exports = {
    router
};