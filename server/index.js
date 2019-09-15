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
app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  jimp
    .read(__dirname + "/womanyellingcat.jpg")
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
