'use strict';

// import dsv from "./dsv";

// var tsv = dsv("\t");

// export var tsvParse = tsv.parse;
// export var tsvParseRows = tsv.parseRows;
// export var tsvFormat = tsv.format;
// export var tsvFormatRows = tsv.formatRows;

let dsv = require(__dirname + "/dsv.js");

var tsv = dsv("\t");

module.exports = {
	tsvParse: tsv.parse,
	tsvParseRows: tsv.parseRows,
	tsvFormat: tsv.foramt,
	tsvFormatRows: tsv.formatRows,
};