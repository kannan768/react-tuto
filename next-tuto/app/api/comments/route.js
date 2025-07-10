

export async function GET() {
    return Response.json({message:"Hello, this is the comments route!"});
}

export async function POST(request) {
  const body = await request.json();

  return Response.json({
    message: "Received POST data",
    data: body,
  });
}