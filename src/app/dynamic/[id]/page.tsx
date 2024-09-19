import { getProduct, getListProducts } from "@/data/product";
import React, { Suspense } from "react";

async function ListProduct() {
  // const productDetail = await getProduct(id);
  const products = await getListProducts();
  return (
    <div className="flex gap-5">
      {/* <h4>{productDetail.fieldTest}</h4> */}
      {products.map((item) => (
        <div key={item.id} className="border p-2">
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default async function page({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  return (
    <div>
      params: {params.id}
      <h3>product</h3>
      <div className="border w-fit p-3">
        <p>name: {product.name}</p>
      </div>
      <hr className="my-5" />
      {/* steaming render */}
      <div>
        <h3 className="mb-2">Product popular</h3>
        <Suspense fallback={<div>Loading...</div>}>
          <ListProduct />
        </Suspense>
      </div>
    </div>
  );
}
