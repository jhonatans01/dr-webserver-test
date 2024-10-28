import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import Routes from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.use(cors());

Routes.forEach((route) => {
  app.use("/", route);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
