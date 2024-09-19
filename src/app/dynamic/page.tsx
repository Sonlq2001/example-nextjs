import React from "react";

export default function page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  console.log({ searchParams, params });
  return (
    <div>
      <h1>dynamic rendering</h1>
      <p>key search: {JSON.stringify(searchParams)}</p>
    </div>
  );
}
