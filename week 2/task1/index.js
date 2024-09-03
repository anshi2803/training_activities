const express= require("express");
const storage= require('node-persist')
const cookieparser= require('cookie-parser');
storage.init();

const app= express();
app.use(express.json());  //json parser
app.use(cookieparser());

app.use("/api/auth", require('./auth-routes'))
app.listen(5000,()=> console.log("Server Started"))