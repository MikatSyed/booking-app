const express = require('express');
const  dotenv = require('dotenv'); 
const authRoute = require("./routes/authRoute.js");
const userRoute = require("./routes/userRoute.js");
const hotelsRoute = require("./routes/hotelRoute.js");
const roomRoute =  require("./routes/roomRoute.js");
const cookieParser =  require("cookie-parser");
const { connect } = require("./config/database.js");
const path = require("path");


const app = express();
dotenv.config({ path: "backend/config/config.env" });

//middlewares

app.use(cookieParser());
app.use(express.json());

app.use("/api/v1", authRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", hotelsRoute);
app.use("/api/v1", roomRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});


app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});


app.listen(process.env.PORT, () => {
  connect();
  console.log(`app is listening on port http://localhost:${process.env.PORT}`);
});
