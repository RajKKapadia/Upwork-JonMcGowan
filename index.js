const express = require('express');
const cors = require('cors');
require('dotenv').config();

const webApp = express();

const { API_PORT } = process.env;
const PORT = process.env.PORT || API_PORT;

webApp.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

webApp.use(
    express.json()
);

webApp.use(cors(
    {
        origin: true
    }
)
);

const homeRoute = require('./routes/home_route');
const twilioRoute = require('./routes/twilio_route');

webApp.use(homeRoute.router);
webApp.use(twilioRoute.router);

webApp.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});
