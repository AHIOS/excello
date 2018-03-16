
var lastReq;

exports.newHook = (req, res) => {
  lastReq = req.body;
  console.log(lastReq);
  res.status(200).json({
      err:false,
      status: "OK"
    });
};

app.lastReq = (req, res) =>{
  if (lastReq) {
    res.status(200).json(lastReq);
  }
  res.status(200).json({});
};

exports.getTracks = (req, res) => {
  Track.find({}, function (err, tracks) {
    if (err) return next(err);
    res.status(200).json(tracks);
  });
};
