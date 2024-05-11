import { IEstimate } from "./Estimate";

export interface IUser {
  email: string;
  estimates: IEstimate[];
  firebase_uid: string;
}
