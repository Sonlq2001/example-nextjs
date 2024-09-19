"use client";

// import { getProduct } from "@/data/product";
// import ServerComponent from "@/components/server-component/server-component";
import React, { useState } from "react";

// function ProductClient() {
//   return (
//     <div>
//       <h3>Product render client</h3>
//     </div>
//   );
// }

// type ClientComponentProps = {
//   children?: React.ReactNode;
// };

export default function ClientComponent() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   getProduct("8").then((res) => {
  //     console.log("client show::", res);
  //   });
  // }, []);

  const handleSetCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="border w-fit p-3">
      <h1>ClientComponent</h1>
      <p>Count: {count}</p>
      <button onClick={handleSetCount}>Click</button>
      {/* 
      {children} */}
      {/* <ServerComponent /> */}
    </div>
  );
}
