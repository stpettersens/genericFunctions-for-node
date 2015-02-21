/**
	Generic functions library for use in Node.js applications.
	Copyright (c) 2014 Sam Saint-Pettersen.

	Released under the MIT/X11 License.
	Please see LICENSE file.

	TO USE: var g = require('generic-functions');

	@file Generic functions library for Node.js
	@author Sam Saint-Pettersen
	@copyright (c) 2014 Sam Saint-Pettersen
	@version 0.1.8
*/
'use strict';

var g = exports;

/**
 * @global
 * @name g_strcmp
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
 * @global
 * @name g_icstrcmp
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
 * @global
 * @name g_strendswith
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
 * @global
 * @name g_icstrendswith
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
 * @global
 * @name g_println
 * @function
 * @description
 * Print a string to stdout.
 * @param {string} message Message string to print.
*/
g.println = function(message) {
	console.log(message);
};

/**
 * @global
 * @name g_printlns
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
 * @global
 * @name g_objGetKeyByValue
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
