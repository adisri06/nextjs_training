import Link from "next/link";
export default function Home() {
  return (
    <div>
    <h1>Welcome to our stores </h1>
    <Link href="/shopping">Go to Shopping</Link>
    </div>
  );
}
