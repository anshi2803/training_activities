const express= require('express');
const server = express();
const methodcontroller= require('./index.js');
const storage = require("node-persist");
storage.init();

// let userlogin=[];
async function registeruser(username, password) {
    const user= await storage.getItem(username);
    if(user){
        console.log("User already exist");
    }
    const resp=await storage.values(username,password)
    users[username]=resp;
    console.log("User Registered Successfully");
}

async function loginuser(username, password) {
    const resp= users[username];
    if(!resp){
        console.log("Invalid Credentials");
    }
    console.log("Login Successful");
}

async function changepassword(username, currentpassword, newpassword) {
    const resp= users[username];
    if(!resp){
        console.log("Invalid Credentials");
    }
    users[username] = await storage.values(newpassword);
    console.log("Password Changed Successful");
}

async function logoutuser() {

    console.log("Logout Successful");
}

// const registeruser


// registeruser=> username , password
// loginuser=>username,password checkvalid
// changepassword=>username, currentpassword, newpassword
// logoutuser=>  




server.use(express.json())
server.use('/task',methodcontroller );

server.use((req,res)=> {
    res.send('Page Not Found');
})
server.listen(5000, ()=> console.log("server started"));

// module.exports={registeruser, loginuser, changepassword, logoutuser};