const cardController = require('./cardController');

var lastReq;

exports.newHook = (req, res) => {
  lastReq = req.body;
  console.log(lastReq);
  cardController.handlePost(req, res);
  // res.status(200).json({
  //     err:false,
  //     status: "OK"
  //   });
};

exports.lastReq = (req, res) =>{
  if (lastReq) {
    res.status(200).json(lastReq);
  }
  // res.status(200).json({});
  cardController.handleGet(req, res);
};

exports.getTracks = (req, res) => {
  Track.find({}, function (err, tracks) {
    if (err) return next(err);
    res.status(200).json(tracks);
  });
};
