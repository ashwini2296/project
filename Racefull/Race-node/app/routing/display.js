module.exports=app=>{
    const score=require("../controller/score.controller");
    var router=require("express").Router();

    router.post("/GetScore",score.insert);
    app.use('/api/race', router);
}