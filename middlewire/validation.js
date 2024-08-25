function Validation(req,res,next){
    if(req.token){
    console.log("Token Approved");
    next();
    return;
    }
    //     console.log("No Token");
    // res.send("<h1>No Auth</h1>")
}

module.exports=Validation;