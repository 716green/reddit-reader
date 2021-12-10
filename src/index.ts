import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import axios from "axios";
const app = express();
const PORT = process.env.PORT || 3000;

console.log(process.env.TEST || "⛔️ ERROR - ENV VARS NOT FOUND");

const getSubreddit = (value: string): string => {
  return "https://api.reddit.com/r/" + value;
};

const url = getSubreddit("gameDev");

// Middleware
app.use(cors());

// Endpoints
app.get("/", (_req: Request, res: Response) => {
  axios
    .get(url)
    .then(({ data }) => {
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
      res.json({ error: err });
    });
});

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
