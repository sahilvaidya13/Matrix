const express = require("express");
const app = express();
const DashRoute = require("./routes/Dashboard");
require("dotenv").config();
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/dash", DashRoute);
app.listen(process.env.PORT, () => {
  console.log("Listening to 4000..");
});
