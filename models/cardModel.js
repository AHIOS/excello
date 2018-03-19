var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var CardSchema = new Schema({
  type: {
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


const Card = mongoose.model('Card', CardSchema);

module.exports = Card;
