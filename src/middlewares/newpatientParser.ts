import { NextFunction, Request, Response } from "express";
import { NewPatientEntrySchema } from "../utils/toNewPatient";

export const newPatientParser = (req: Request, _res: Response, next: NextFunction) => {
  try{
    NewPatientEntrySchema.parse(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};

