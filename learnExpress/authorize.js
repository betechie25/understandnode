const authorize= (req,res,next)=>{
    console.log("Authorize middleware");
    //check for authorize user prerna through query string : if yes than add on req :user info
    const {user} = req.query
   if(user === 'prerna'){
       req.user = {name:'prerna',id:6}
       next()
   }
   else{
        res.status(401).send('Unauthorized User')
   }

}

module.exports = authorize;