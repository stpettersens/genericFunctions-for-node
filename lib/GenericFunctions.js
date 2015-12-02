/**
	Generic functions library for use in Node.js applications.
	Copyright (c) 2014 Sam Saint-Pettersen.

	Released under the MIT/X11 License.
	Please see LICENSE file.

	TO USE: var g = require('generic-functions');

	@file Generic functions library for Node.js
	@module generic-functions
	@author Sam Saint-Pettersen
	@copyright (c) 2014-2015 Sam Saint-Pettersen
	@version 0.1.9
*/
'use strict';

var g = exports;

/**
 * @name strcmp
 * @function
 * @description
 * Compare 2 strings to ensure they match (case-sensitive).
 * @param {string} str1 First string.
 * @param {string} str2 Second string.
 * @returns {boolean} match If strings match: true.
*/
g.strcmp = function(str1, str2) {
	var match = false;
	if(str1 === str2) { match = true; }
	return match;
};

/**
 * @name icstrcmp
 * @function
 * @description
 * Compare 2 string to ensure they match (case-insensitive).
 * @param {string} str1 First string.
 * @param {string} str2 Second string.
 * @returns {boolean} match If strings match: true.
*/
g.icstrcmp = function(str1, str2) {
	return g.strcmp(str1.toLowerCase(), str2.toLowerCase());
};

/**
 * @name strendswith
 * @function
 * @description
 * Check that a string ends with a certain suffix.
 * Useful for checking file extensions (case-sensitive).
 * @param {string} str String to check for suffix.
 * @param {string} suffix Suffix to look for.
 * @returns {boolean} match If suffix found: true.
*/
g.strendswith = function(str, suffix) {
	return str.indexOf(suffix, str.length - suffix.length) !== -1;
};

/**
 * @name endswithdot
 * @function
 * @description
 * Get the last string part than ends with a dot suffix.
 * @param {string} str String to get the dot suffix part for.
 * @returns {string} String dot suffix part.
*/
g.endswithdot = function(str) {
	var parts = str.split('.');
	return '.' + parts[parts.length - 1];
};

/**
 * @name icstrendswith
 * @function
 * @description
 * Check that a string ends with a certain suffix (case-insensitive).
 * @param {string} str String to check for suffix.
 * @param {string} suffix Suffix to look for.
 * @returns {boolean} match If suffix found: true.
*/
g.icstrendswith = function(str, suffix) {
	return g.strendswith(str.toLowerCase(), suffix.toLowerCase());
};

/**
 * @name println
 * @function
 * @description
 * Print a string to stdout.
 * @param {string} message Message string to print.
*/
g.println = function(message) {
	console.log(message);
};

/**
 * @name printlns
 * @function
 * @description
 * Print an array line-by-line to stdout.
 * @param {string[]} message Message string array to print.
*/
g.printlns = function(message) {
	message.forEach(function(line) {
		g.println(line);
	});
};

/**
 * @name objGetKeyByValue
 * @function
 * @description 
 * Get an object's key by its value.
 * @param {object} object Object to scan for value.
 * @param {dynamic} value Value to seek key for.
 * @returns {string} key Object property/key as string.
*/
g.objGetKeyByValue = function(object, value) {
	for(var prop in object) {
		if(object.hasOwnProperty(prop)) {
			if(object[prop] === value)
				return prop;
		}
	}
};
