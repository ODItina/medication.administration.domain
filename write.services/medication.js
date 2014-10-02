/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var medicationSchema = require('../models/medication_model');
var Medication = require('../dto/medication');

exports.create = function(args, next){
    var medication = new Medication(args);
    medicationSchema.create(medication, function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};

exports.update = function(args, next){
    var medication = new Medication(args);
    medicationSchema.findOneAndUpdate({patient_id: medication.patient_id}, args, function(err, update){
        if(err){
            return next(err, null);
        }
        if(update){
            return next(null, update);
        }
    });
};

exports.remove = function(args, next){
    medicationSchema.remove({patient_id:args.patient_id}, function(err){
        if(err){
            return next(err, false);
        }
        return next(null, true);
    });
};
