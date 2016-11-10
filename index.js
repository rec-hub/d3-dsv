// export {default as dsvFormat} from "./src/dsv";
// export {csvParse, csvParseRows, csvFormat, csvFormatRows} from "./src/csv";
// export {tsvParse, tsvParseRows, tsvFormat, tsvFormatRows} from "./src/tsv";
'use strict';

let _dsv = require(__dirname+"/src/dsv.js");
let _csv = require(__dirname+"/src/csv.js");
let _tsv = require(__dirname+"/src/tsv.js");
module.exports = {
	dsvFormat:_dsv,
	csvParse: _csv.csvParse,
	csvParseRows: _csv.csvParseRows,
	csvFormat: _csv.csvFormat,
	csvFormatRows: _csv.csvFormatRows,
	tsvParse: _tsv.tsvParse,
	tsvParseRows: _tsv.tsvParseRows,
	tsvFormat: _tsv.tsvFormat,
	tsvFormatRows: _tsv.tsvFormatRows,
};
