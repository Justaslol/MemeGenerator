const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     body: req.params
//   });
// });

app.get("/", (req, res) => {
  res.send({
    woman: req.param("woman"),
    cat: req.param("cat")
  });
});

app.listen(4000, () => {
  console.log("Listening on PORT 4000");
});
