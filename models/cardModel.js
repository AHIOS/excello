var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var CardSchema = new Schema({
    start_ts: {
      type: Number,
      required: true
    },
    end_ts: {
      type: Number,
      required: true
    },
    user_id: {
      type: Number,
      required: true
    },
    pet_id: {
      type: Number,
      required: true
    }
},
{
  timestamps: true
});


const Card = mongoose.model('Card', CardSchema);

module.exports = Card;
