//Server Application
import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");  //Response to the client
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);  //Callback Function
});