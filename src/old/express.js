import express from "express";
import morgan from "morgan";
const app = express();
app.use(morgan("tiny"));
app.get(
  "/",
  (err, req, _, next) => {
    next();
    console.log("2nd function");
  },
  (req, res) => {
    return res.status(200).json({ abc: "ashish" });
    console.log("hello ashish");
  },
);
app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});
app.all("*", (req, res) => {
  res.status(404).send("Not Found");
});
app.listen(8000, () => {
  console.log(`server running on port 8000`);
});
