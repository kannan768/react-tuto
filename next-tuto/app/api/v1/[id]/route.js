
export async function GET(request, { params }) {
    const { id } = await params;

    return Response.json({ message: `Hello, this is the route for ID: ${id}!` });
}
export async function POST(request, { params }) {
    const { id } = await params;
    const data = await request.json();

    return Response.json({ message: `Data received for ID: ${id}`, data });
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  return Response.json({
    message: `Resource with ID: ${id} has been deleted.`,
  });
}