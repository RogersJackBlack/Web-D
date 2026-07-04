import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 3000;

const today = new Date();
const dayName = 0;
// console.log(`Today is: ${dayName}`);


app.get("/", (req, res) => {

  let day = "It's a weekday";
  let adv = "Keep working hard!";

  if(dayName === 0 || dayName === 6) {
    day = "It's a weekend";
    adv = "Enjoy your time off!";
  }
  res.render("index.ejs", { day: day, advice: adv });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
