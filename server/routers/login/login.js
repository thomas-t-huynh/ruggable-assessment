import express from "express";

import {
  addLoginCount,
  checkExcessiveLogin,
  database,
  errorMessages,
} from "./login.utils";

const router = new express.Router();

router.post("/login", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  if (checkExcessiveLogin(ip)) {
    return res.status(429).send({ error: errorMessages[429] });
  }

  const { username, password } = req.body;
  const isValidLogin =
    database.hasOwnProperty(username) &&
    database[username].password === password;

  if (isValidLogin) {
    return res.status(202).send({ error: "" });
  }

  addLoginCount(ip);

  res.status(401).send({ error: errorMessages[401] });
});

export default router;
