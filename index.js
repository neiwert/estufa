const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

require("./routes")(app);

app.listen(3000);

const gracefulShutdown = (app) => {
  process.on('SIGHUP', () => {
    console.log('SIGHUP happened!')
    app.close(() => {
      console.log('server closed!')
      process.exit(128 + 1)
    })
  })
  process.on('SIGINT', () => {
    console.log('SIGINT happened!')
    app.close(() => {
      console.log('server closed!')
      process.exit(128 + 2)
    })
  })
  process.on('SIGTERM', () => {
    console.log('SIGTERM happened!')
    app.close(() => {
      console.log('server closed!')
      process.exit(128 + 15)
    })
  })
}