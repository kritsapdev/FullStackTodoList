const express = require("express")
const app = express()

const PORT = 3000

app.use(express.json());

const tasks = [
  { id: 1, name: "Task 1", complete: false },
  { id: 2, name: "Task 2", complete: false },
  { id: 3, name: "Task 3", complete: false },
  { id: 4, name: "Task 4", complete: false },
  { id: 5, name: "Task 5", complete: false },
];


app.get("/",(req,res)=>{
  res.json({msg:"Todo List"});
});

app.get("/todo",(req,res)=>{
  res.json(tasks);
});

app.get("/todo/:id",(req,res)=>{
  res.json({msg:"wow this is ID 1"});
});

app.post("/todo",(req,res)=>{
  res.json({msg:"Add Todo"});
});

app.put("/todo",(req,res)=>{
  res.json({msg:"Update Todo"});
});

app.delete("/todo",(req,res)=>{
  res.json({msg:"Delete Todo"});
});

app.listen(PORT,()=>{
  console.log(`App is running on PORT ${PORT}`);
});