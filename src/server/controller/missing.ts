import { missingRepository } from "../repository/missing";

async function get(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = {
    page: searchParams.get("page"),
    limit: searchParams.get("limit"),
    search: searchParams.get("search"),
  };

  const page = Number(query.page);
  const limit = Number(query.limit);
  const searchTerm = query.search || "";

  if (query.page && isNaN(page)) {
    return new Response(
      JSON.stringify({
        error: {
          message: "`page` precisa ser um number",
        },
      }),
      {
        status: 400,
      },
    );
  }
  if (query.limit && isNaN(limit)) {
    return new Response(
      JSON.stringify({
        error: {
          message: "`limit` precisa ser um number",
        },
      }),
      {
        status: 400,
      },
    );
  }

  try {
    const output = await missingRepository.get({ page, limit, searchTerm });
    return new Response(
      JSON.stringify({
        total: output.total,
        pages: output.pages,
        missings: output.missings,
      }),
      {
        status: 200,
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: {
          message: "Falha ao listar desaparecidos",
        },
      }),
      {
        status: 400,
      },
    );
  }
}

async function create(req: Request) {
  // Fail Fast Validation
  const body = await req.json();

  if (!body.success) {
    // Type narrowing
    return new Response(
      JSON.stringify({
        error: {
          message: "Você precisa fornecer dados para cadastrar um desaparecido",
          description: body.error,
        },
      }),
      {
        status: 400,
      },
    );
  }

  try {
    const createdMissing = await missingRepository.create(body);

    return new Response(
      JSON.stringify({
        missing: createdMissing,
      }),
      {
        status: 201,
      },
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Erro no Server:", error);
    return new Response(
      JSON.stringify({
        error: {
          message: "Falha ao criar Desaparecido(a)",
        },
      }),
      {
        status: 400,
      },
    );
  }
}

export const missingController = {
  get,
  create,
};
