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



app.listen(PORT,()=>{
  console.log(`App is running on PORT ${PORT}`);
});