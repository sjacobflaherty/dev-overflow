import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
        <h1>All Questions</h1>
        <Link href="/ask-question"></Link>
      </div>
    </>
  );
}
