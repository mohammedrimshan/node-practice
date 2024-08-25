function Token(req,res,next){
    console.log("Creating token");
    req.token=true;
    next();
}


module.exports=Token;