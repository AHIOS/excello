// Only act when a specific route is called
// This reduces malicious / accidental use
exports.newHook = (req, res) => {
  lastReq = req.body;
  console.log(lastReq);
  res.status(200).json({
      err:false,
      status: "OK"
    });
};

exports.getTracks = (req, res) => {
  Track.find({}, function (err, tracks) {
    if (err) return next(err);
    res.status(200).json(tracks);
  });
};
