import { cookies } from "next/headers";

export default function ServerComponent() {
  const cookieStore = cookies();
  console.log({ cookieStore });
  return (
    <div className="border w-fit p-3">
      <h1>Server component</h1>
    </div>
  );
}
