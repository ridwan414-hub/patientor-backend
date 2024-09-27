import { Router } from "express";
import patientsService from "../services/patientsService";
import { NewPatientEntrySchema } from "../utils/toNewPatient";
import { newPatientParser } from "../middlewares/newpatientParser";
import { errorMiddleware } from "../middlewares/errorHandler";

const patientsRouter = Router();

patientsRouter.get("/", (_req, res) => {
  res.send(patientsService.getPatientsDataWithoutSsn());
});

patientsRouter.post("/", newPatientParser, (req, res) => {
    const newPatientEntry = NewPatientEntrySchema.parse(req.body);
    const addedEntry = patientsService.addPatient(newPatientEntry);
    res.json(addedEntry);
});

patientsRouter.use(errorMiddleware);

export default patientsRouter;