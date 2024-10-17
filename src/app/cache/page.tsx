import Link from "next/link";

export const getRandom = async (): Promise<{ random: number }> => {
  const res = await fetch("http://localhost:3000/api/random", {
    next: {
      revalidate: 5,
    },
  });
  const result = await res.json();
  return result;
};

export default async function page() {
  // const randomNumberData = () => Math.floor(Math.random() * (1000 - 100) + 100);
  const { random } = await getRandom();

  return (
    <div className="p-5">
      <h1 className="text-2xl">Server component</h1>
      <hr className="my-3" />
      <p>Number random: {random}</p>
      <br />

      <nav className="flex flex-col gap-2">
        {/* <Link href="/server-other">Back to page server other</Link> */}

        <Link href="/client">Back to page Client component</Link>
      </nav>
    </div>
  );
}
