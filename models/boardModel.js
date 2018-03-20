var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var BoardSchema = new Schema({
  shortLink: {
    type: String,
    required: true
  },
  shortUrl: {
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
},
{
  timestamps: true
});


const Board = mongoose.model('Board', BoardSchema);

module.exports = Board;
