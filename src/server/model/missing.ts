import { models, model, Schema } from "mongoose";

const MissingSchema: Schema = new Schema(
  {
    missingType: {
      required: true,
      type: String,
    },
    recorderName: {
      required: true,
      type: String,
    },
    recorderNumber: {
      required: true,
      type: String,
    },
    missingName: {
      required: true,
      type: String,
    },
    missingNumber: {
      type: String,
    },
    missingLastLocal: {
      required: true,
      type: String,
    },
    observation: {
      type: String,
    },
    status: {
      required: true,
      type: String,
      default: "need_help", // need_help, solved, indetermined, at_rescue
    },
    situation: {
      required: true,
      type: String,
      default: "missing", // missing, islanded, sheltered
    },
  },
  {
    timestamps: true,
  },
);

const MissingModel = models.missing || model("missing", MissingSchema);

export default MissingModel;
