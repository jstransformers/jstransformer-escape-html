'use strict';

exports.name = 'escape-html';
exports.outputFormat = 'html';

exports.render = function (str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;');
};
