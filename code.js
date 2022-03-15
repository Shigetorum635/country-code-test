const requestCountry = require('request-country');
const express = require('express');
const app = express();

app.use(requestCountry.middleware({
    attributeName: 'requestCountryCode', // default is 'requestCountryCode'
    privateIpCountry: 'US' // Result for private network IPs
}));

app.get('/', (req, res) => {
    console.log(`AHHHH SEX! (ok)`)
    /**
     * its the country.
     * 
     * that's it. it's just the country
     * 
     * What you looking at huh
     */
    const country = req.requestCountryCode
    return res.status(200).json({code: country !== false ? country : "None", found: country === false ? false : true})
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Hosting on port 80...`)
});
