const mongoose = require('mongoose');
var Card = require("../models/cardModel");
var express = require('express')
  , router = express.Router();


var handlePost = (req, res) => {
  var newCard = new Card({
    start_ts       : req.body.start_ts,
    end_ts         : req.body.end_ts,
    user_id        : req.body.user_id,
    pet_id        : req.body.pet_id
  });
  newCard.save(function(err) {
    if (err) {
      return res.status(400).json({success: false, msg: 'Save card failed.', error: err.message});
    }
    res.status(201).json({success: true, msg: 'Successfully created new card.', track: newTrack});
  });
};

var handleGet = (req, res) => {
  res.status(200).json({msg:'OK'});
};

router.post('/', handlePost);
router.get('/', handleGet);




module.exports = router;
