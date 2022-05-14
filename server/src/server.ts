import express from "express";
import cors from "cors";

import { routes } from "./routes";

const app = express();

app.use(
  cors({ origin: "https://hcurriculum-o5slgbqk6-casa-henrique.vercel.app/" })
);
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("HTTP server running!");
});
