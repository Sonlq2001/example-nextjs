/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState, useEffect } from "react";

import Link from "next/link";

export default function page() {
  // const randomNumberData = () => Math.floor(Math.random() * (1000 - 100) + 100);

  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const callApi = async () => {
      const res = await fetch("http://localhost:3000/api/random", {
        cache: "force-cache",
      });
      const result = (await res.json()) as { random: number };
      setValue(result.random);
    };
    callApi();
  }, []);

  // const number = randomNumberData();

  // console.log("client cache:::", number);
  return (
    <div className="p-5">
      <h1 className="text-2xl">Client component</h1>
      <hr className="my-3" />
      <p suppressHydrationWarning>Number random: {value}</p>
      <br />
      <Link href="/cache">Back to page Cache</Link>
    </div>
  );
}
