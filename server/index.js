const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");
const jimp = require("jimp");

const app = express();

const origin =
  process.env.NODE_ENV !== "production" ? "http://localhost:3000" : "prod-url";

app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  jimp
    .read("womanyellingcat.jpg")
    .then(picture => {
      jimp.loadFont(jimp.FONT_SANS_16_BLACK).then(font => {
        picture
          .print(font, 10, 10, `${req.param("woman")}`, 390)
          .print(font, 420, 10, `${req.param("cat")}`, 790)
          .write("./public/meme.jpg");
      });
      res.type("png");
      res.sendFile(__dirname + "/public/meme.jpg");
    })
    .catch(err => {
      console.error(err);
    });
});

app.listen(4000, () => {
  console.log("Listening on PORT 4000");
});
