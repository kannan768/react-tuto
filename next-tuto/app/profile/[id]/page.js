
export async function generateMetadata({ params }) {
  return {
    title: `Profile of User ${params.id}`,
    description: `Viewing profile page for user ID: ${params.id}`,
  };
}
  
export default function profile({ params }) {
    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1>Profile Page</h1>
            <p>Welcome to your profile! Here you can view and edit your personal information.</p>
            <p>User ID: {params.id}</p>
            {/* Add your profile details and edit form here */}
        </div>
    );
}