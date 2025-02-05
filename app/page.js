import Link from 'next/link';

export default function Home() {
  return (
        <main style={{ textAlign: 'center' }}>
          <h1>CPRG 306: Web Development 2 - Assignments</h1>
          <p>Week 2:{' '}
        <Link href="http://localhost:3000/week-2" target="_blank" rel="noopener noreferrer"style={{ color: 'green' }}>
          Click Here
        </Link>
      </p>
          <h1>Week 3:{''}
            <Link href="http://localhost:3000/week-3" target="_blank" rel="noopener noreferrer"style={{ color: 'green' }}>
          Click Here
        </Link>

          </h1>
        </main>
  );
}
