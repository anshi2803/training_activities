const storage = require("node-persist");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  const { name, username, email, password } = req.body;
  if (!name || !email || !username || !password) {
    return res.status(400).send({ message: "All fields are mandatory" });
  }
  const user = await storage.getItem(email);
  if (user) {
    return res.status(400).send({ message: "Email ID is already registered" });
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newuser = {
    name,
    username,
    email,
    password: hashPassword,
  };
  const resp = await storage.setItem(email, newuser);
  res.status(201).send(({ message: "User registered Successfully" }, resp));
}

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: "All fields are mandatory" });
  }
  const user = await storage.getItem(email);
  if (!user) {
    return res.status(400).send({ message: "Email ID is not registered" });
  }

  const check = await bcrypt.compare(password, user.password);
  if (check) {
    const token = jwt.sign(user.email, "iamanshika");
    res.cookie("token", token);
    return res.status(200).send({ message: "User LoggedIn Successfully" , user, token});
  } else
    return res.status(403).send({ message: "Invalid Credentials" });
}

async function changepassword(req, res) {
    const { oldpassword, newpassword } = req.body;
    if (!oldpassword || !newpassword) {
      return res.status(400).send({ message: "All fields are mandatory" });
    }

    const email=req.email;
    const user = await storage.getItem(email);
    if (!user) {
      return res.status(400).send({ message: "Email ID is not registered" });
    }
  
    const pw=user.password;
    console.log(oldpassword);
    
    const check = await bcrypt.compare(oldpassword, pw);
    if (check) {
        user.password= await bcrypt.hash(newpassword,10);
        storage.setItem(email, user)
        return res.status(200).send({ message: "User Password Changed Successfully" });
  }
  else{
    return res.status(403).send({message: "Password is not matching with current password"})
  }
}
module.exports = { register, login, changepassword}
