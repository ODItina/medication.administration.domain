/**
 * Created by KP_TerminalUser2 on 03/09/2014.
 */
var mongoose = require('mongoose');

var drugRegimentSchema = require('./drugregiment.model'),
    Schema = mongoose.Schema;

var medicationAdministrationSchema = new Schema({

    date_of_dispensing:{
        type:Date
    },

    date_of_visit:{
        type:Date
    },

    patient_height:{
        type:String,
        trim:true
    },
    patient_weight:{
        type:String,
        trim:true
    },

    type_of_visit:{
        type:String,
        enum:['Initial Visit', 'Follow-up Visit']
    },

    drug_regiment:[drugRegimentSchema],

    remarks:{
        type:String
    },

    is_current:{
        type:Boolean,
        default:true
    },
    patient_id:{
        type:Schema.Types.ObjectId,
        ref:'patient',
        required:true
    }
});
var MedicationAdministration = mongoose.model('medication', medicationAdministrationSchema);
module.exports = MedicationAdministration;

