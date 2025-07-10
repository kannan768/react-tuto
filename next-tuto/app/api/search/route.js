export async function GET(request) {
  const { searchParams } = request.nextUrl;

  const query = searchParams.get("q"); 
  const page = searchParams.get("page") || 1; 

  return Response.json({
    message: `Search results for: ${query}`,
    page: Number(page),
  });
}

