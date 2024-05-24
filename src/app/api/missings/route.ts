import { missingController } from "@server/controller/missing";

export async function GET(request: Request) {
  return await missingController.get(request);
}

export async function POST(request: Request) {
  return await missingController.create(request);
}
