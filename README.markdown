## generic-functions 
[![Build Status](https://travis-ci.org/stpettersens/genericFunctions-for-node.svg?branch=master)](https://travis-ci.org/stpettersens/genericFunctions-for-node) [![Code Climate](https://codeclimate.com/github/stpettersens/genericFunctions-for-node/badges/gpa.svg)](https://codeclimate.com/github/stpettersens/genericFunctions-for-node/code) [![npm version](https://badge.fury.io/js/generic-functions.svg)](http://npmjs.org/package/generic-functions) [![Development Dependency Status](https://david-dm.org/stpettersens/genericFunctions-for-node/dev-status.png?theme=shields.io)](https://david-dm.org/stpettersens/genericFunctions-for-node#info=devDependencies)

A generic function library for Node.js

#### Usage #####

To use, just add `var g = require('generic-functions');` to your JavaScript file.

Functions offered:

`g.strcmp(str1, str2);` (Boolean)

Compare two strings (case-sensitive) to check if they match.
Returns `true` or `false`.

`g.icstrcmp(str1, str2);` (Boolean)

(As `g.strcmp(str1, str2);`, but case-insenstive).

`g.strendwith(str, suffix)` (Boolean)

Check that `str` ends with `suffix`. Useful for
checking file extensions (case-sensitive).

`g.icstrendswith(str, suffix);` (Boolean)
(As `g.strendswith(str, suffix);`, but case-insensitive).

`g_endswithdot(str);` (String)

Get the last string part than ends with a dot suffix.

`g.println(message);` (Void)

A thin wrapper around `console.log(...)`; print to stdout.

`g.printlns(message);` (Void)

Where `message` is an array such as `["Hello", "World"]`.
Print an array line-by-line to stdout.

`g.objGetKeyByValue(object, value);` (Object key as String)

Get an object's key by its value.

#### Install ####

`$ npm install generic-functions`

Optionally, you might want to include the `-g` option after `install` to make the functions
available to all your Node.js modules.
