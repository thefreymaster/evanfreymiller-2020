const express = require('express')
const path = require('path')
const app = express()
const environment = app.get('env');
const axios = require('axios');

const BASE_URL = "https://evanfreymiller-2020.firebaseio.com/";

app.use((req, res, next) => {
  console.log({ secure: req.secure })
  if (req.headers["x-forwarded-proto"] === "https" || environment === "development") {
    next()
  }
  else {
    res.status(301).redirect(`https://${req.headers.host}${req.url}`)
  }
})

app.get('/api', (req, res) => {
  res.send({
    "welcome": "You've found the top level API endpoint. You're quite the explorer.",
    "/info": {
      "description": "returns full json object for all data needed for evanfreymiller.com",
      "/blurb": "returns description data of Evan",
      "/links": "returns top of page links, and relivant data about each",
      "/title": "returns EJF, that's it."
    },
    "/lola": "returns a picture of my dog"
  }) 
})

app.get('/api/lola', (req, res) => {
  res.sendFile(path.join(__dirname, '/', `lola.jpg`));
})

app.get('/api/info', (req, res) => {
  axios.get(`${BASE_URL}/info.json`).then((response) => {
    res.send(response.data)
  })
})

app.use(express.static(__dirname + '/build'));

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.set('x-powered-by', false);
  // Handle React routing, return all requests to React app
  app.use(express.static(path.join(__dirname, "/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/build", "index.html"));
  });
}

const port = process.env.PORT || 9900
app.listen(port, () => {
  console.log(`API listening on port ${port}...`)
})