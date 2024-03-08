import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href="/hooks/use">USE()</Link>
    </main>
  );
}
