// Only act when a specific route is called
// This reduces malicious / accidental use
exports.newHook("/hooks", function(req, res, next) {
  lastReq = req.body;
  console.log(lastReq);
  res.status(200).json({
      err:false,
      status: "OK"
    });
});
