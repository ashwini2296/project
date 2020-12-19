const db = require("../models");
const Tutorial = db.timebasedgameresult;
const Op = db.Sequelize.Op;

exports.insert=(req,res)=>{
    console.log(req.body,"data inserted");
    
  db.sequelize.query("insert into timebasedgameresult(timeTofinish) values (?)",
  {replacements: [ req.body.time],type: db.sequelize.QueryTypes.INSERT }).then(data=>{
      res.send(data);
    });
}