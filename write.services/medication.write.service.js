/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var _ = require('lodash'),
    Medication = require('../models/medication.model');

exports.createMedication = function(args, next){
    var medication = new Medication(args);
    medication.save(function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};

exports.updateMedication = function(args, next){
    Medication.findOne({patient_id: args.patient_id}, args, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc = _.extend(doc, args);

            doc.save(function(err){
                if(!err){
                    return  next(null,doc);
                }
            });
        }
    });
};

exports.removeMedication = function(args, next){
    Medication.remove({patient_id:args.patient_id}, function(err){
        if(err){
            return next(err, false);
        }
        return next(null, true);
    });
};
