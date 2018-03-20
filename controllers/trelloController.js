const cardController = require('./cardController');
var request = require("request");


var lastReq;

exports.newHook = (req, res) => {
  lastReq = req.body;
  // console.log(lastReq);
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

exports.getCardByID = function(trelloId, callback){
  var options = { method: 'GET',
  url: 'https://api.trello.com/1/cards/' + trelloId,
  qs:
   { fields: 'all',
     attachments: 'false',
     attachment_fields: 'all',
     checklists: 'none',
     checklist_fields: 'all',
     sticker_fields: 'all',
     key: process.env.TRELLO_KEY,
     token: process.env.TRELLO_TOKEN
   }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log (body);
    callback(JSON.parse(body));
  });
}

exports.getBoardByID = function(trelloId, callback){
  var options = { method: 'GET',
  url: 'https://api.trello.com/1/boards/' + trelloId,
  qs:
   { actions: 'none',
     boardStars: 'none',
     cards: 'all',
     checklists: 'none',
     fields: 'name, desc, descData, closed, idOrganization, pinned, url, shortUrl, prefs, labelNames',
     labels: 'all',
     lists: 'all',
     members: 'none',
     memberships: 'none',
     membersInvited: 'none',
     membersInvited_fields: 'none',
     key: process.env.TRELLO_KEY,
     token: process.env.TRELLO_TOKEN
   }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log (body);
    callback(JSON.parse(body));
  });
}

exports.getLabelByID = function(trelloId, callback){
  var options = { method: 'GET',
  url: 'https://api.trello.com/1/labels/' + trelloId,
  qs:
   { key: process.env.TRELLO_KEY,
     token: process.env.TRELLO_TOKEN
   }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log (body);
    callback(JSON.parse(body));
  });
}

exports.getTracks = (req, res) => {
  Track.find({}, function (err, tracks) {
    if (err) return next(err);
    res.status(200).json(tracks);
  });
};
