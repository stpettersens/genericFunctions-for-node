genericFunctions-for-node
=========================

A generic function library for Node.js

## Usage ##

To use, just add `var g = require('generic-functions');` to your JavaScript file.

Functions offered:

`g.strcmp(str1, str2);` (Boolean)

Compare two strings (case-sensitive) to check if they match.
Returns `true` or `false`.

`g.icstrcmp(str1, str2);` (Boolean)

(As `g.strcmp(str1, str2);`, but case-insenstive).

`g.println(message);` (Void)

A thin wrapper around `console.log(...)`; print to stdout.

`g.printlns(message);` (Void)

Where `message` is an array such as `["Hello", "World"]`.
Print an array line-by-line to stdout.

## Install ##

`$ npm install generic-functions`

Optionally, you want to include the `-g` option after `install` to make the functions
available to all your Node.js modules.
