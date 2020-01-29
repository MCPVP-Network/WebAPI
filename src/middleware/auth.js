/**
 * Checks if client has the correct auth key
 */
module.exports = function (options)
{
   let authKey = options.authKey;
   return function (req, res, next) 
   {
      if(req.body["AuthKey"] == authKey)
      {
         next()
         return;
      }
      res.status(401).json({ error: 'Unauthorized: Do not have access' })
   }
 }