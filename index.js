import express from "express";
import cors from "cors";
import {} from "dotenv/config";
import fetch from "node-fetch";
//import SolarLogs from "./models/DataModel.js";
import Routes from "./routes/Routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);

app.listen(3051, () => console.log(Date(), ": PicAPI server started"));
