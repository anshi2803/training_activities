const jwt = require("jsonwebtoken");

function authenticate(req, res, next){
    const cookie=req.cookies;
    if(cookie){
        const token= cookie.token;
        const decode= jwt.verify(token, "iamanshika");
        req.email =decode;
        next();
    }
    else{
        return res.status(405).send({message: "not authenticated"})
    }
    
}
module.exports=authenticate;