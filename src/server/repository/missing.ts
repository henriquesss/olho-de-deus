import MissingModel from "@server/model/missing";
import { Missing } from "@server/schema/missing";
import dbConnect from "@server/infra/db/mongo";

interface IMissingRepositoryGetParams {
  page?: number;
  limit?: number;
}

interface IMissingRepositoryGetOutput {
  missings: Missing[];
  total: number;
  pages: number;
}

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

async function get({
  page,
  limit,
}: IMissingRepositoryGetParams = {}): Promise<IMissingRepositoryGetOutput> {
  const currentPage = page || 1;
  const currentLimit = limit || 10;

  const startIndex = (currentPage - 1) * currentLimit;
  // const endIndex = currentPage * currentLimit - 1;

  try {
    await dbConnect();

    const [missings, total] = await Promise.all([
      MissingModel.find()
        .sort({ date: -1 })
        .skip(startIndex)
        .limit(currentLimit)
        .exec(),
      MissingModel.countDocuments().exec(),
    ]);

    if (!missings) {
      throw new Error("Falha ao buscar desaparecidos vindos do banco de dados");
    }

    const totalPages = Math.ceil(total / currentLimit);

    return {
      missings,
      total,
      pages: totalPages,
    };
  } catch (error) {
    throw new Error("Falha ao buscar desaparecidos");
  }
}

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
  get,
  create,
  getMissingById,
};
