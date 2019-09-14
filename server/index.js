const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");
const jimp = require("jimp");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  // res.send({
  //   woman: req.param("woman"),
  //   cat: req.param("cat")
  // });
  jimp
    .read("womanyellingcat.jpg")
    .then(picture => {
      res.send(picture.greyscale);
    })
    .catch(err => {
      console.error(err);
    });
});

app.listen(4000, () => {
  console.log("Listening on PORT 4000");
});
