/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */

var Medication = require('../models/medication.model');

exports.createDrugRegiment = function(args, next){
    Medication.findOne({patient_id: args.patient_id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.drug_regiment.push(args);
            doc.save(function(err,result){
                if(err){
                    next(err,null);
                }
                if(result){
                    next(null,result);
                }
            });
        }
    });
};

exports.updateDrugRegiment = function(args, next){
    Medication.findOne({patient_id: args.patient_id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.drug_regiment.id(args._id).set(args);
            doc.save(function(err,result){
                if(err){
                    next(err,null);
                }
                if(result){
                    next(null,result);
                }
            });
        }
    });
};

exports.removeDrugRegiment = function(args, next){
    Medication.findOne({patient_id:args.patient_id}, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.drug_regiment.id(args._id).remove();
            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });

        }

    });
};