## generic-functions [![Build Status](https://travis-ci.org/stpettersens/genericFunctions-for-node.svg?branch=master)](https://travis-ci.org/stpettersens/genericFunctions-for-node) [![npm version](https://badge.fury.io/js/generic-functions.svg)](http://npmjs.org/generic-functions) [![Development Dependency Status](https://david-dm.org/stpettersens/genericFunctions-for-node/dev-status.png?theme=shields.io)](https://david-dm.org/stpettersens/genericFunctions-for-node#info=devDependencies)

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

`g.println(message);` (Void)

A thin wrapper around `console.log(...)`; print to stdout.

`g.printlns(message);` (Void)

Where `message` is an array such as `["Hello", "World"]`.
Print an array line-by-line to stdout.

#### Install ####

`$ npm install generic-functions`

Optionally, you might want to include the `-g` option after `install` to make the functions
available to all your Node.js modules.
