import express from 'express'
import HelloController
  from "./controllers/hello-controller.js"
import UserController from "./users/users-controller.js";
import TuitsController
  from "./controllers/tuits/tuits-controller.js";
import cors from "cors";
import mongoose from "mongoose";
mongoose.connect('mongodb+srv://Dhanoo:WebDev2022@cluster0.ihyp89x.mongodb.net/?retryWrites=true&w=majority');
//'mongodb://localhost:27017/tuiter'
//mongodb+srv://Dhanoo:<password>@cluster0.ihyp89x.mongodb.net/?retryWrites=true&w=majority
const app = express();
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4002)



