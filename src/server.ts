import "express-async-errors";

import express from "express";
import { interceptorError } from "./infra/interceptors";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.use(interceptorError);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () =>
  console.log(`🚀 Server has started at http://localhost:${PORT}`)
);
