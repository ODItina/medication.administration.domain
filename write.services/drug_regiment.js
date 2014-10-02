/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var _ = require('lodash');
var medicationSchema = require('../models/medication_model');
var DrugRegiment = require('../dto/drug_regiment');

exports.create = function(args, next){
    var drugRegiment  = new DrugRegiment(args);
    medicationSchema.findOne({patient_id: args.patient_id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.drug_regiment.push(drugRegiment);
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

exports.remove = function(args, next){
    medicationSchema.findOne({patient_id:args.patient_id}, function(err, doc){
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