const jwt= require('jsonwebtoken');
const config= require('config');

module.exports = function auth(req,res,next){
  const token= req.header('x-auth-token');
  console.log("Token here HOW?" , token);
  //const role= req.cookie.role;

  if(!token ) return res.status(402).send('Access Denied. No Token Provided');

  try{
    //console.log('Password for mail server name: '+ config.get("key"));
    const decode= jwt.verify(token, "jwtPrivateKey");
    
    req.user= decode;
    console.log("decode version", decode);
    console.log(decode.firstName);
    console.log(decode.role);
    next();
  }
  catch(ex){
    res.status(400).send("Invalid Token");
  }

  
}