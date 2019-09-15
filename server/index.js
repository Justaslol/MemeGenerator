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
      jimp.loadFont(jimp.FONT_SANS_16_BLACK).then(font => {
        picture
          .print(font, 10, 10, `${req.param("woman")}`, 390)
          .print(font, 420, 10, `${req.param("cat")}`, 790)
          .write("test.jpg");
      });
    })
    .catch(err => {
      console.error(err);
    });
});

app.listen(4000, () => {
  console.log("Listening on PORT 4000");
});
