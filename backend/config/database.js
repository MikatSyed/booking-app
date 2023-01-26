
// import { mongoose } from 'mongoose';
// import { dotenv } from 'dotenv';

// dotenv.config({ path: "backend/config/config.env" });

// export const connectDatabase = () => {
//   mongoose
//     .connect(process.env.DB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
     
//     })
//     .then((data) => {
//       console.log(`Mongodb connected with server : ${data.connection.host}`);
//     });
// };
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: "backend/config/config.env" });
exports.connect = async () => {
    try {
      mongoose.set("strictQuery", false);
      await mongoose.connect(process.env.DB_URI, {
              useNewUrlParser: true,
              useUnifiedTopology: true,
             
            });
      console.log(`Mongodb connected with server`);
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });