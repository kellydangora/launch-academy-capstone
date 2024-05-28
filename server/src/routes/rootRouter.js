import express from "express";

import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import propertiesRouter from "./api/v1/propertiesRouter.js"
import imagesRouter from "./api/v1/imagesRouter.js"

const rootRouter = new express.Router();

rootRouter.get("/", (req, res) => {
  res.redirect("/properties")
})

rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/properties", propertiesRouter)
rootRouter.use("/api/v1/images", imagesRouter)

export default rootRouter;
