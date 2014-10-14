/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var _ = require('lodash');

var medication = require('./dto/medication');
var drugRegiment = require('./dto/drugregiment');


module.exports.dto  = {
    medication: medication,
    drugRegiment:drugRegiment
};

module.exports.read = _.extend(
    require('./read.services/medication.read.service')
);


module.exports.write = _.extend(
    require('./write.services/medication.write.service'),
    require('./write.services/drugregiment.write.service')
);

