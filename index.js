'use strict';

var escape = require('escape-html');

exports.name = 'escape-html';
exports.outputFormat = 'html';

exports.render = function (str) {
  return escape(str);
};
