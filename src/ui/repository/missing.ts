import { Missing } from "@ui/schema/missing";
import { IMissing } from "../../types/missing";

export async function createMissing(data: IMissing): Promise<Missing> {
  const response = await fetch("/api/missings", {
    method: "POST",
    headers: {
      // MIME Type
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      success: true,
      ...data,
    }),
  });

  if (response.ok) {
    const serverResponse = await response.json();

    if (!serverResponse.missing) {
      throw new Error("Falha ao registrar desaparecido(a) :(");
    }

    const mising = serverResponse.missing;

    return mising;
  }

  throw new Error("Falha ao criar desaparecido(a):(");
}
