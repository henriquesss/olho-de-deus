export interface IEstimate {
  id: string;
  description: string;
  stack: string[];
  devs: number;
  time: number;
  createdAt?: Date;
  createdBy?: string;
  createdByEmail?: string;
}
