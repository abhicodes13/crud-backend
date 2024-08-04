const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const serverless = require("serverless-http");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);
app.get("/", (req, res) => {
  res.send("hi");
});

app.use("/.netlify/functions/api", router);
mongoose
  .connect(
    "mongodb+srv://admin:zWTOkJS5P1u8UbyK@backend.dxtaxn4.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=Backend"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("listening..");
    });
  })
  .catch(() => {
    console.log("failed");
  });

module.exports.handler = serverless(app);
