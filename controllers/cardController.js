const mongoose = require('mongoose');
var Card = require("../../models/cardModel");

exports.postCard = (req, res) => {
  var newCard = new Card({
    start_ts       : req.body.start_ts,
    end_ts         : req.body.end_ts,
    user_id        : req.body.user_id,
    pet_id        : req.body.pet_id
  });
  for (var i = 0, len = req.body.path.length; i < len; i++) {
    var point = req.body.path[i];
    var newPoint = new Point({
      ts    : point.timestamp,
      coordinates : [point.coordinates[0], point.coordinates[1]]
    });
    newTrack.path.push(newPoint);
    // newPoint.save(function(err) {
    //   // newTrack.points.push(newPoint);
    // });
  }


  newTrack.save(function(err) {
    if (err) {
      return res.status(400).json({success: false, msg: 'Save track failed.', error: err.message});
    }
    res.status(201).json({success: true, msg: 'Successfully created new track.', track: newTrack});
  });
};
