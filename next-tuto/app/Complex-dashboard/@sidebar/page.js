import Link from 'next/link';
export default async function sidebar() {
    return (
      <aside>
        <div style={{ padding: "1rem" }}>
          <h2>Complex Dashboard Sidebar</h2>
          <nav>
            <ul>
              <li>
                <Link href="/Complex-dashboard/Subnavi">subnav</Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
}
