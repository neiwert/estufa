const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")

const app = express();
app.use(bodyParser.json());

//todo
app.use(cors());

require("./routes")(app);

app.listen(3000);