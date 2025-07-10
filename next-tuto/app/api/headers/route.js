import { response } from "express";

export async function GET(request) { 
    const headers = request.headers.get("authorization");
    
    if(!headers) {
        return Response.json({ message: "No authorization header provided." }, { status: 401 });
    }
   const token = headers.split(" ")[1];
   if (!token) {
        return Response.json({ message: "No token provided." }, { status: 401 });
    }
    return Response.json({ message: "Token received successfully.", token: token }, { status: 200 });
}