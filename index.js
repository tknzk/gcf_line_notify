/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */

var request = require('request');
var config = require('config');
var lineConfigAccessToken = config.Line.access_token;

exports.sendLineNotify = function sendLineNotify (req, res) {
  var options = {
    url: 'https://notify-api.line.me/api/notify',
    method: 'POST',
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + lineConfigAccessToken,
    },
    form: { message : `${req.body.text}` }
  };
  // request LINE Notify
  request(options, recallback);

  function recallback(error, response, body) {
    if (error == true) {
      console.log(body);
    }
  }

  res.send('ok');
};
