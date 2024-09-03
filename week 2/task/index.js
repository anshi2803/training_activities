const express = require("express");
const router = express.Router();
// const {registeruser, loginuser, changepassword, logoutuser} =require('./authModule');

const storage = require("node-persist");
storage.init();

router.get("/", async (req, res) => {
  const data = await storage.values();
  res.status(201).send(data);
});

router.get("/:username", async (req, res) => {
  const username = req.params.username;
  const data = await storage.getItem(username);
  if (data) {
    return res.status(200).send(data);
  }
  res.status(404).send("User not found");
});

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    const resp = await storage.setItem(username, { username, password });
    if(resp){
      res.status(201).send({ message: "User Registered successfully" });
    }
    res.status(404).send("Invalid Credentials");
  });

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const resp = await storage.setItem(username, { username, password });
  if(resp){
    res.status(201).send({ message: "User Registered successfully" });
  }
  res.status(404).send("Invalid Credentials");
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const resp = await storage.setItem(username, { username, password });
    if(resp){
        res.status(201).send({ message: "User Login successfully" });
      }
      res.status(404).send("User doesnot exist");
  });

  router.post("/change-password", async (req, res) => {
    const { username, currentpassword,newpassword } = req.body;
    const resp = await storage.setItem(username, { username, currentpassword, newpassword });
    if(resp){
        res.status(201).send({ message: "Password Changed successfully" });
      }
      res.status(404).send("Invalid Password");
  });

  router.post("/logout", async (req, res) => {
    const resp = await storage.logoutuser();
    if(resp){
        res.status(201).send({ message: "Logout successfully" });
      }
      res.status(404).send("Error");
  });
// router.put("/:username", async (req, res)=>{
//     const username= req.params.username;
//     const data=await storage.getItem(username);
//     if(data){
//         const {username,password}=req.body;
//         await storage.updateItem(username, {username,password});
//         return res.status(200).send("User details Updated")
//     }
//     res.status(404).send("User Not found");
// })
router.delete("/:username", async (req, res) => {
  const username = req.params.username;
  const data = await storage.getItem(username);
  if (data) {
    await storage.removeItem(username);
    return res.status(200).send("User Deleted");
  }
  res.status(404).send("User Not found");
});

module.exports = router;
