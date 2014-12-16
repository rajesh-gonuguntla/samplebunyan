var logger = require('./bunyan-helper.js');

var section1 = function() {
  logger.info("info log from section1.js");

  logger.debug("debug log from section1.js");

  logger.warn("warn log from section1.js");

  logger.error("error log from section1.js");
};

module.exports = section1;