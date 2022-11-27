const express = require('express');
const router = express.Router();

const DIALOGFLOW_API = require('../helper_functions/dialogflow_api');

router.post('/twilio', async (req, res) => {
    
    let body = req.body;

    let senderId = body.From;
    let message = body.Body;

    try {
        let intentData = await DIALOGFLOW_API.detectIntent(
            'en-US',
            message,
            `twilio${senderId}`
        );

        console.log(intentData);
    } catch (error) {
        console.log(`Error at twilio route - ${error}`);
    }

    res.sendStatus(200);
});

module.exports = {
    router
};