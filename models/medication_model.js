/**
 * Created by KP_TerminalUser2 on 03/09/2014.
 */
var mongoose = require('mongoose');
var drugRegimentSchema = require('./drug_regiment_schema');

var medicationAdministrationSchema = mongoose.Schema({
    pharmacy_id:String,
    date_of_dispensing:String,
    date_of_visit:Date,
    patient_height:String,
    patient_weight:String,
    type_of_visit:{type:String, enum:['Initial Visit', 'Follow-up Visit']},
    drug_regiment:[drugRegimentSchema],
    remarks:String,
    is_current:{type:Boolean, default:true},
    patient_id:{type:mongoose.Schema.Types.ObjectId, ref:'patient', required:true}
});
var MedicationAdministration =mongoose.model('medication', medicationAdministrationSchema);
module.exports = MedicationAdministration;

