import ClientComponent from "@/components/client-component/client-component";
// import { getProduct } from "@/data/product";
import React from "react";
// comment 5
export default async function page() {
  console.log("1");
  console.log("2");
  console.log("3");
  return (
    <div>
      <h1>server only</h1>
      <ClientComponent />
      {/* name: {product.name} */}
    </div>
  );
}
