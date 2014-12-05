/*
    Test the functionality offerered by generic functions library.
*/
'use strict';

var g = require('./GenericFunctions.js'),
should = require('should');

describe('g.strcmp(): Case-sensitive string comparison', function() {

    it("Compare two strings: return true when 'a' is equal to 'a'", function() {
        g.strcmp('a', 'a').should.equal(true);
    });

    it("Compare two strings: return false when 'A' is not equal to 'a'", function() {
        g.strcmp('A', 'a').should.equal(false);
    });

    it("Compare two strings: return false when 'a' is not equal to 'b'", function() {
        g.strcmp('a', 'b').should.equal(false);
    });
});

describe('g.icstrmcp(): Case-insensitive string comparison', function() {

    it("Compare two strings: return true when 'b' is equal to 'b'", function() {
        g.icstrcmp('b', 'b').should.equal(true);
    });

    it("Compare two strings: return true when 'B' is equal to 'b'", function() {
        g.icstrcmp('B', 'b').should.equal(true);
    });

    it("Compare two strings: return false when 'b' is not equal to 'c'", function() {
        g.icstrcmp('b', 'c').should.equal(false);
    });
});

describe('g.strendwith(): Check that a string ends with a certain suffix (case-sensitive)'
, function() {

    it("Check that 'file.txt' ends with '.txt'", function() {
        g.strendswith('file.txt', '.txt').should.equal(true);
    });

    it("Check that 'file.txt' does not end with '.TXT'", function() {
        g.strendswith('file.txt', '.TXT').should.equal(false);
    });

    it("Check that 'Makefile' does not end with '.txt'", function() {
        g.strendswith('Makefile', '.txt').should.equal(false);
    });
});

describe('g.icstrendsiwth(): Check that a string ends with a certain suffix (case-insensitive)'
, function() {

    it("Check that 'photo.png' ends with '.png'", function() {
        g.icstrendswith('photo.png', '.png').should.equal(true);
    });

    it("Check that 'photo.png' also ends with '.PNG'", function() {
        g.icstrendswith('photo.png', '.PNG').should.equal(true);
    });

    it("Check that 'package.json' does not end with '.cson'", function() {
        g.icstrendswith('package.json', '.cson').should.equal(false);
    });
});

describe('g.objGetKeyByValue(): Get an object\'s key by its value.'
, function() {
    
    var object = { meaningOfLife: 42, daysOfAYear: 365 };

    it("Get meaningOfLife from 42", function() {
        g.objGetKeyByValue(object, 42).should.equal('meaningOfLife');
    });

    it("Get daysOfAYear from 365", function() {
        g.objGetKeyByValue(object, 365).should.equal('daysOfAYear');
    });
});
