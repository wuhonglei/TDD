/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var Stockfetch = function() {
  this.readTickersFile = function(filename, onError) {  
    onError('Error reading file: ' + filename);
  };
};

module.exports = Stockfetch;