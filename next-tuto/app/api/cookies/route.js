import { cookies } from "next/headers";

export async function GET(request) {
  const cookieStore = cookies(); // ✅ no await

  const myCookie = cookieStore.get("myCookie");

  return Response.json({
    message: "Cookie fetched",
    cookie: myCookie?.value || "Not set",
  });
}

export async function POST(request) {
  const cookieStore = cookies(); // ✅ no await

  cookieStore.set({
    name: "myCookie",
    value: "nextjs15rocks",
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  return Response.json({ message: "Cookie has been set" });
}

export async function DELETE(request) {
  const cookieStore = cookies(); // ✅ no await

  cookieStore.delete("myCookie");

  return Response.json({ message: "Cookie deleted" });
}
