/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var medicationSchema = require('../models/medication.model');

exports.getMedication = function(args, next){
    medicationSchema.findOne({patient_id:args.patient_id}, function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};

exports.getMedications = function(args, next){
    medicationSchema.find({}, function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};