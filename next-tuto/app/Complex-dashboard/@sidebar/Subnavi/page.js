
import Link from 'next/link';
export default async function subnav() { 
    return (
        <div>
            <h1>Sub Navigation</h1>
            <Link href="/Complex-dashboard">Back to Dashboard</Link>
        </div>
    );
}