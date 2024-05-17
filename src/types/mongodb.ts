import { Mongoose } from "mongoose";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      mongoose: {
        promise: Promise<Mongoose> | null;
        conn: Mongoose | null;
      };
    }
  }
}
