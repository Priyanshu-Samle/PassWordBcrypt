import express from "express"

import { create,readAll } from "../Controller/userControll.js"

const route = express();
route.post("/create",create);
route.get("/readAll",readAll);

export default route;