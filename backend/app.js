import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import hotelsRoute from "./routes/hotelRoute.js";
import roomRoute from "./routes/roomRoute.js";
import cookieParser from "cookie-parser";
import {connect} from './config/database.js'

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
