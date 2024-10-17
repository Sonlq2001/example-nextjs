import Link from "next/link";

export default async function page() {
  const randomNumberData = () => Math.floor(Math.random() * (1000 - 100) + 100);
  return (
    <div className="p-5">
      <h1 className="text-2xl">Server component other</h1>
      <hr className="my-3" />
      <p>Number random: {randomNumberData()}</p>
      <br />
      <Link href="/cache">Back to page cache</Link>
    </div>
  );
}
