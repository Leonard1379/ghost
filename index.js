const ghost = require("ghost");
const express = require("express");
const path = require("path");

const app = express();

ghost({ config: path.join(__dirname, "current", "config.production.json") })
  .then((ghostServer) => {
    app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);

    ghostServer.start(app);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

module.exports = app;
