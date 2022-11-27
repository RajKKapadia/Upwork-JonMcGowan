# Twilio Dialogflow Connection
Message sent to `Twilio` is received by this webhook, then the infromation from `Twilio` is used to generate a responde from `Dialogflow` and then the response is sendt back to a Database for further action.

#### Note
GCP service account credential json file is needed in `helper_function/dialogflow_api.js` file.