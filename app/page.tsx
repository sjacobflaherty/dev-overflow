import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1 className="h1-bold">Next.js + TypeScript</h1>
      <p>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </p>
    </div>
  );
}
