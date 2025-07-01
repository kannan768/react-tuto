import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Home Page</h1>
      <p>Welcome to our website! Explore our features and services.</p>

      <div style={{ marginTop: "1rem" }}>
        <Link href="/login" className="text-blue-500 hover:underline">
          Login Us
        </Link>
        <br />
        <Link href="/register" className="text-blue-500 hover:underline">
          Register Us
        </Link>
      </div>
    </div>
  );
}
