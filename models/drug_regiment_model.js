/**
 * Created by KP_TerminalUser2 on 03/09/2014.
 */
var mongoose = require('mongoose');

var drugRegimentSchema = mongoose.Schema({
    medication_description:String,
    medication_strength:String,
    dosage:String,
    duration:String,
    prescribed_quantity:String,
    dispensed_quantity:String

});
module.exports = drugRegimentSchema;
