const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');
const authConfig = require('../config/auth.json')
const authMiddleware = require('./middleware/auth.js')
const allRoutes = require('./route/index')

let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(authMiddleware({ authKey: authConfig["AUTH_KEY"] }))

app.post("/version",function(req,res,next){
   console.log(req.body);
   res.json({"Version": "0.0.1"});
})

app.use("/api", allRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))