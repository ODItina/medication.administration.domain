/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var medication_read = require('./read.services/medication');
var medication_write = require('./write.services/medication');

var medication = require('./dto/medication');
var drug_regiment = require('./dto/drug_regiment');


exports.dto  = {
    medication: medication,
    drug_regiment:drug_regiment
};

exports.medication_service = {
    read_service:medication_read,
    write_service:medication_write
};

exports.drug_regiment_service = require('./write.services/drug_regiment');

