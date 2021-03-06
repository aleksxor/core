const { ActionTransport } = require('./../../../../src');
const Promise = require('bluebird');

function EchoAction(request) {
  return Promise.resolve(request.params);
}

EchoAction.transports = [ActionTransport.socketIO, ActionTransport.http];

module.exports = EchoAction;
