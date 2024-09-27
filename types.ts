import { z } from "zod";
import { NewPatientEntrySchema, NonSensitivePatientEntrySchema } from "./src/utils/toNewPatient";
export interface DiagnosisEntry {
  code: string;
  name: string;
  latin?: string;
}
export enum Gender {
  Female = "female",
  Male = "male",
  Other = "other",
} 

export interface PatientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export type NewPatientEntry = z.infer<typeof NewPatientEntrySchema>;
export type NonSensitivePatientEntry = z.infer<typeof NonSensitivePatientEntrySchema>;

export interface PatientEntry extends NewPatientEntry {
  id: string;
}

  