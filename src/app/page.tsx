import ClientComponent from "@/components/client-component/client-component";
import ServerComponent from "@/components/server-component/server-component";
import Link from "next/link";

export default function page() {
  // add comment 1
  return (
    <div className="p-5">
      <nav className="mb-3 pb-3 border-b border-gray-200 flex gap-3">
        <Link href="/static">Static 3</Link>
        <Link href="/dynamic?search=hello">Dynamic</Link>
        <Link href="/dynamic/9">Detail</Link>
        <Link href="/free-style">Free style</Link>
        <Link href="/server-only">Server only</Link>
      </nav>

      <div className="flex gap-4">
        <ServerComponent />
        <ClientComponent />
      </div>
    </div>
  );
}
