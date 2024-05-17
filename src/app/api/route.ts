export async function GET() {
  return new Response(
    JSON.stringify({ message: "API do Olho de deus está funcionando" }),
    {
      status: 200,
    },
  );
}
