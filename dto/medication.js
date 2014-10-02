/**
 * Created by KP_TerminalUser2 on 03/09/2014.
 */
var MedicationAdministration = function(args){
    var medication = {};

    medication.patient_id = args.patient_id;
    medication.date_of_visit = args.date_of_visit;
    medication.date_of_dispensing = args.date_of_dispensing;
    medication.patient_height = args.patient_height;
    medication.patient_weight = args.patient_weight;
    medication.type_of_visit = args.type_of_visit;
    medication.drug_regiment = args.drug_regiment;
    medication.remarks = args.remarks;
    medication.is_current = args.is_current || false;

    return medication;
};
module.exports = MedicationAdministration;
