import patientsData from "../../data/patients";
import { NonSensitivePatientEntry, NewPatientEntry, PatientEntry } from "../../types";
import { v4 as uuidv4 } from "uuid";


const getPatientsDataWithoutSsn = (): NonSensitivePatientEntry[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const newPatient = {
    id: uuidv4(),
    ...entry,
  };
  patientsData.push(newPatient);
  return newPatient;
};

export default { getPatientsDataWithoutSsn, addPatient };
