let AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    let receiver = event['receiver'];
    let sender = event['sender'];
    let message = event['messaage'];

    console.log("Sending message", message, "to receiver", receiver);
    
    callback(null, {"message": "Successfully executed"});
}