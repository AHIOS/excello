const mongoose = require('mongoose');
var Card = require("../models/cardModel");
const trelloController = require('./trelloController');
var ActionsEnum = Object.freeze({"action_move_card_to_board":1,
                                 "action_changed_description_of_card":2,
                                 "action_renamed_card":3,
                                 "action_copy_card":4,
                                 "action_move_card_from_list_to_list":5,
                                 "unknow":0});


exports.handlePost = (req, res) => {
  var action = req.body.action.display.translationKey;
  var cardID = req.body.action.display.entities.card.id;
  trelloController.getCardByID(cardID, function(body){
    var newCard = new Card({
      type       : req.body.action.display.entities.card.type,
      id         : req.body.action.display.entities.card.id,
      text       : req.body.action.display.entities.card.text,
      desc       : body.desc
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
  });
};

exports.handleGet = (req, res) => {
  res.status(200).json({msg:'OK'});
};
