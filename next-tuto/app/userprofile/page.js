// This is a server component by default
import Counter from "../components/counter"; // Importing the client component

export default function Userprofile() {
  const serverTime = new Date().toLocaleTimeString();
    const user = {
        name: "Kannan",
        age: 30,
        hobbies: ["coding", "reading", "gaming"]
    }
  return (
    <div>
      <h1>Welcome to Next.js 15</h1>
      <p>🕒 Server Rendered Time: {serverTime}</p>
      <Counter user={user} /> {/* Client component inside server component */}
    </div>
  );
}
