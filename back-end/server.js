//import express library
import express from "express";
//import dotenv library
import dotenv from "dotenv";

//load configuration from .env file
dotenv.config({ path: new URL("../.env", import.meta.url).pathname });

//define port from .env file or use default port 3000
const PORT = process.env.BE_PORT || 3000;
//initialize express app
const app = express();

//define path to the static files (built react app)
//const ReactAppDistPath = new URL("../front-end/dist/", import.meta.url);

//define path to the index.html file
//const ReactAppIndex = new URL("../front-end/dist/index.html", import.meta.url);

//tell express to serve the static files
//app.use(express.static(ReactAppDistPath.pathname));

//define a route for the status api
app.get("/api/status", (req, res) => {
  res.send({ status: "Ok" });
});

//define a route for all other requests
app.get("/*", (req, res) => {
  res.sendFile(ReactAppIndex.pathname);
});

//start express server
app.listen(PORT, () => {
  console.log("Server running on Port: ", PORT);
});
