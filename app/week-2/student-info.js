import Link from 'next/link';

const StudentInfo = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <h1>Denys Shyshkov</h1>
      <p>
        GitHub Repository:{' '}
        <Link href="https://github.com/eevnyx/cprg306-assignments" target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>
          Link
        </Link>
      </p>
    </main>
  );
};

export default StudentInfo;
