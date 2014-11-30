/*
	Generic functions library for use in Node.js applications.
	Copyright (c) 2014 Sam Saint-Pettersen.

	Released under the MIT/X11 License.
	Please see LICENSE file.

	TO USE: var g = require('generic-functions');
*/
'use strict';

var g = exports;

// Compare 2 strings to ensure they match (case-sensitve).
g.strcmp = function(str1, str2) {
	var match = false;
	if(str1 === str2) { match = true; }
	return match;
};

// Compare 2 string to ensure they match (case-insensitive).
g.icstrcmp = function(str1, str2) {
	return g.strcmp(str1.toLowerCase(), str2.toLowerCase());
};

// Check that a string ends with a certain suffix.
// Useful for checking file extensions (case-sensitive).
g.strendswith = function(str, suffix) {
	return str.indexOf(suffix, str.length - suffix.length) !== -1;
};

// Check that a string ends with a certain suffix (case-insensitive).
g.icstrendswith = function(str, suffix) {
	return g.strendswith(str.toLowerCase(), suffix.toLowerCase());
};

// Print a string to stdout.
g.println = function(message) {
	console.log(message);
};

// Print an array line-by-line to stdout.
g.printlns = function(message) {
	message.forEach(function(line) {
		g.println(line);
	});
};
