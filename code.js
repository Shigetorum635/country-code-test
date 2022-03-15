const requestCountry = require('request-country');
const express = require('express');
const app = express();

app.use(requestCountry.middleware({
  attributeName: 'requestCountryCode', // default is 'requestCountryCode'
  privateIpCountry: 'US' // Result for private network IPs
}));

app.get('/', (req, res) => {
    console.log(`AHH SEX`)
	res.send(req.requestCountryCode);
})

app.listen(80, () => {
    console.log(`Hosting on port 80...`)
});
