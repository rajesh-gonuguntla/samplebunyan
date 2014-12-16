var logger = require('./bunyan-helper.js');

var sample = function() {
  logger.info("hello world!");

  logger.debug("hello world debug");

  logger.warn("hello world warn");

  logger.error("hello world error");
};


module.exports = sample;