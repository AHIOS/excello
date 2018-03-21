var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var LabelSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  idBoard: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});


const Label = mongoose.model('Label', LabelSchema);

module.exports = Label;
