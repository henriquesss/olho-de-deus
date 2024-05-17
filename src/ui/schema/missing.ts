import { z as schema } from "zod";

export const MissingSchema = schema.object({
  _id: schema.string().uuid(),
  recorderName: schema.string().min(1),
  recorderNumber: schema.string().min(1),
  missingName: schema.string().min(1),
  missingNumber: schema.string(),
  missingLastLocal: schema.string().min(1),
  situation: schema.string().default("missing"), // missing, islanded, sheltered
  status: schema.string().default("need help"), // need help, resolved, indeterminate, at_rescue
  observation: schema.string(),
  createdAt: schema.string().transform((date) => {
    return new Date(date).toISOString();
  }),
  updateddAt: schema.string().transform((date) => {
    return new Date(date).toISOString();
  }),
});

export type Missing = schema.infer<typeof MissingSchema>;
