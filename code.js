const requestCountry = require("request-country");
const express = require("express");
const app = express();

app.use(
  requestCountry.middleware({
    attributeName: "requestCountryCode", // default is 'requestCountryCode'
    privateIpCountry: "US", // Result for private network IPs
  })
);

app.get("/", (req, res) => {
  /**
   * Yup, that's the country.
   * Very surprising
   * wow!
   */
  const country = req.requestCountryCode;
  if (!country) return res.status(404).json({ message: "Not found" });
  else
    return res.status(200).json({
      code: country,
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Hosting on port ${port}!`);
});
