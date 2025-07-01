export const metadata = {
  title: "About Us - Create Next App",
  description: "Generated about",
};

export default function aboutlayout({ children }) {
  return (
    <div>
      <h1 className="text-cyan-800">About Layout</h1>
      {/* You can add a navigation bar or other layout components here */}
      {children}
    </div>
  );
}
