import express from "express";
import morgan from "morgan";
// import fs from "fs";
// import path from "path";
// import { ServerStyleSheet } from "styled-components";
// import React from "react";
// import ReactDOMServer from "react-dom/server";

// import App from "../src/App";

const PORT = 8000;

const app = express();

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(express.json());

const database = {
  thomas927: {
    password: "password",
    username: "thomas927",
  },
};

const loginCount = {};

export const errorMessages = {
  excessiveLogin: "Please wait a few minutes before you try again.",
  incorrectUser:
    "Sorry, your password was incorrect. Please double-check your password.",
};

function checkLoginCount(ip) {
  if (loginCount.hasOwnProperty(ip)) {
    loginCount[ip]++;
    if (loginCount[ip] >= 5) {
      return true;
    }
  } else {
    loginCount[ip] = 0;
    return false;
  }
}

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const isValidLogin =
    database.hasOwnProperty(username) &&
    database[username].password === password;

  if (isValidLogin) {
    return res.status(202).send({ message: "" });
  }

  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  if (checkLoginCount(ip)) {
    return res.status(429).send({ message: errorMessages.excessiveLogin });
  }
  res.status(401).send({ message: errorMessages.incorrectUser });
});

// app.use("^/$", (req, res, next) => {
//   fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
//     const sheet = new ServerStyleSheet();
//     let html;
//     let styleTags;
//     try {
//       html = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
//       styleTags = sheet.getStyleTags();
//     } catch (error) {
//       console.log(err);
//       return res.status(500).send("Some error happened");
//     } finally {
//       sheet.seal();
//     }
//     return res.send(data.replace(renderFullPage(html, styleTags)));
//   });
// });

// function renderFullPage(html, styles) {
//   return `<!doctype html><html lang="en"><head><meta charset="utf-8"/><link rel="icon" href="/favicon.ico"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="theme-color" content="#000000"/><meta name="description" content="Web site created using create-react-app"/><link rel="manifest" href="/manifest.json"/><title>React App</title><script defer="defer" src="/static/js/main.c1dbb3fe.js"></script><link href="/static/css/main.e2369197.css" rel="stylesheet"${styles}</head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root">${html}</div></body></html>`;
// }

// app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
