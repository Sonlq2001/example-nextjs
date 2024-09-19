import ClientComponent from "@/components/client-component/client-component";
// import { getProduct } from "@/data/product";
import React from "react";

export default async function page() {
  return (
    <div>
      <h1>server only</h1>
      <ClientComponent />
      {/* name: {product.name} */}
    </div>
  );
}
