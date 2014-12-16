var bunyan = require('bunyan');
var log = bunyan.createLogger({
  src: true,
  name: "samplebunyan",
  serializers: bunyan.stdSerializers
});

module.exports = log;