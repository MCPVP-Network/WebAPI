var express = require('express')
var router = express.Router()

// define the home page route
/** POST /api/player/playerdata/ **/
router.post('/', function (req, res) 
{
   var uniqueId = req.body.uniqueId;
   if(uniqueId == undefined) 
   {
      res.status(400).json({ error: 'Missing paramter "uniqueId".' })
      return;
   }

   //download from database
   let playerData = {
      username: "Sprock",
      uniqueId: "5d793eed51b747659b384fdaa00034d7",
      rank: "ADMIN",
      lastOnline: "1/1/2020"
   }

  res.json(playerData);
})

module.exports = router