import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
    get_hello,
    gender_prediction,
    predict_nationality,
  } from "./functins.mjs";
const app = express();
const router = express.Router();
const corsOptions = { origin: "*" };
  
router.use(cors(corsOptions));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));  
router.get("/gethello/:name",get_hello)

router.get("/genderprediction/:name", gender_prediction)

router.get("/predictnationality/:name", predict_nationality)

app.use("/", router);


export default app;
