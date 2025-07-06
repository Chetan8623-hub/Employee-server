import express from "express";
import cors from "cors";
import {
  getEmployees,
  postEmployee,
  deleteEmployeeById,
  getEmployeeById,
  putEmployeeById
} from "./controllers/employment.js";

const app = express();
const PORT = 5002;

app.use(cors());
app.use(express.json());

app.get("/employment", getEmployees);
app.post("/employment", postEmployee);
app.delete("/employment/:id", deleteEmployeeById);
app.get("/employment/:id", getEmployeeById);
app.put("/employment/:id", putEmployeeById);

app.get("/", (req, res) => {
  res.send("Welcome to the Employment API Server!.....✅");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
