'use strict';

//import dsv from "./dsv";
let dsv = require(__dirname + "/dsv.js");

var csv = dsv(",");

//export var csvParse = csv.parse;
//export var csvParseRows = csv.parseRows;
//export var csvFormat = csv.format;
//export var csvFormatRows = csv.formatRows;

module.exports = {
	csvParse: csv.parse,
	csvParseRows: csv.parseRows,
	csvFormat: csv.foramt,
	csvFormatRows: csv.formatRows,
};