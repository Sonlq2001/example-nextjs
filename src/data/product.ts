// import "server-only";

const API = "https://615275d04a5f22001701d6f0.mockapi.io/product";

export async function getListProducts() {
  const res = await fetch(API);
  const data = await res.json();
  return data as {
    name: string;
    id: string;
    isComplete: boolean;
    fieldTest: string;
  }[];
}

export async function getProduct(id: string) {
  const res = await fetch(`${API}/${id}`);
  const data = await res.json();
  return data as {
    name: string;
    id: string;
    isComplete: boolean;
    fieldTest: string;
  };
}
