const jwt=require('jsonwebtoken');


module.exports=(req,res,next)=>{
    const authHeader=req.headers['authorization'];
    const token=authHeader && authHeader.split(' ')[1];
    if(token==null){
        return res.status(401).json({error:'Unauthorized'});
    }
    jwt.verify(token,'secretkey'.at(err,user)=>{
        if(err){
            return res.status(403).json({error:'Forbidden'});
        }
        req.user=user;
        next();
    });
}