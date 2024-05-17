import MissingModel from "@server/model/missing";
import { Missing } from "@server/schema/missing";
import dbConnect from "@server/infra/db/mongo";

// interface IMissingRepositoryGetParams {
//   page?: number;
//   limit?: number;
// }

// interface IMissingRepositoryGetOutput {
//   missings: Missing[];
//   total: number;
//   pages: number;
// }

interface INewMissingData {
  missingType: string;
  recorderName: string;
  recorderNumber: string;
  missingName: string;
  missingNumber?: string;
  missingLastLocal: string;
  situation: string;
  status: string;
  observation?: string;
}

// async function get({
//   page,
//   limit,
// }: IMissingRepositoryGetParams = {}): Promise<IMissingRepositoryGetOutput> {
//   const { searchParams } = new URL(req.url);
//   const query = {
//     page: searchParams.get("page"),
//     limit: searchParams.get("limit"),
//   };

//   if (query.page && isNaN(page)) {
//     return new Response(
//       JSON.stringify({
//         error: {
//           message: "`page` must be a number",
//         },
//       }),
//       {
//         status: 400,
//       },
//     );
//   }
//   if (query.limit && isNaN(limit)) {
//     return new Response(
//       JSON.stringify({
//         error: {
//           message: "`limit` must be a number",
//         },
//       }),
//       {
//         status: 400,
//       },
//     );
//   }

//   try {
//     const missings = await MissingModel.find({})
//       .skip((page - 1) * limit)
//       .limit(limit);

//     // Count total number of missings
//     const total = await MissingModel.countDocuments();

//     // Calculate total number of pages
//     const pages = Math.ceil(total / limit);

//     return new Response(
//       JSON.stringify({
//         total: total,
//         pages: pages,
//         missings: missings,
//       }),
//       {
//         status: 200,
//       },
//     );
//   } catch (error) {
//     return new Response(
//       JSON.stringify({
//         error: {
//           message: "Failed to fetch todos",
//         },
//       }),
//       {
//         status: 400,
//       },
//     );
//   }
// }

async function create(newMissingData: INewMissingData): Promise<Missing> {
  try {
    await dbConnect();
    const missing = await MissingModel.create(newMissingData);
    return missing;
  } catch (error) {
    throw new Error("Failed to create Missing");
  }
}

async function getMissingById(id: string): Promise<Missing> {
  try {
    const missing = await MissingModel.findById(id);
    return missing;
  } catch (error) {
    throw new Error("Failed to get missing by id");
  }
}

export const missingRepository = {
  //   get,
  create,
  getMissingById,
};
