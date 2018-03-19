const mongoose = require('mongoose');
var Card = require("../models/cardModel");


exports.handlePost = (req, res) => {
  var newCard = new Card({
    type       : req.body.action.display.entities.card.type,
    id         : req.body.action.display.entities.card.id,
    text       : req.body.action.display.entities.card.text,
    desc       : req.body.action.display.entities.card.desc
  });

  var matches = newCard.text.match(/\((.*?)\)/);
  if (matches) {
    newCard.estPoints = matches[1];
  }
  matches = newCard.text.match(/\[(.*?)\]/);
  if (matches) {
    newCard.conPoints = matches[1];
  }

  newCard.save(function(err) {
    if (err) {
      return res.status(400).json({success: false, msg: 'Save card failed.', error: err.message});
    }
    res.status(201).json({success: true, msg: 'Successfully created new card.', card: newCard});
  });
};

exports.handleGet = (req, res) => {
  res.status(200).json({msg:'OK'});
};
