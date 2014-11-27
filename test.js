'use strict';

var assert = require('assert');

var INPUT = '<span class="foo" id=\'bar\'>hello world</span>';
var EXPECTED = '&lt;span class=&quot;foo&quot; id=&#x27;bar&#x27;&gt;hello world&lt;/span&gt;';

var transformer = require('./');

assert(transformer.render(INPUT) === EXPECTED);

console.log('Tests passed');
