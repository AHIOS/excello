var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var CardSchema = new Schema({
  shortLink: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true
  },
  idList: {
    type: String,
    required: true
  },
  idBoard: {
    type: String,
    required: true
  },
  shortLink: {
    type: String,
    required: true
  },
  shortLink: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  text: {
    type: String
  },
  desc: {
    type: String
  },
  estPoints: {
    type: Number,
    min: [0, 'Too few estimated points'],
    max: 21
  },
  conPoints: {
    type: Number,
    min: [0, 'Too few consumed points'],
    max: 42
  }
});


const Card = mongoose.model('Card', CardSchema);

module.exports = Card;
