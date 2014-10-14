/**
 * Created by KP_TerminalUser2 on 03/09/2014.
 */
var mongoose = require('mongoose');

var drugRegimentSchema = mongoose.Schema({
    medication_description:{
        type:String
    },

    medication_strength:{
        type:String
    },

    dosage:{
        type:String
    },

    duration:{
        type:String
    },
    prescribed_quantity:{
        type:String
    },
    dispensed_quantity:{
        type:String
    }

});
module.exports = drugRegimentSchema;
