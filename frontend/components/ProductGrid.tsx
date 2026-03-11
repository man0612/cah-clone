import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://127.0.0.1:3001/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.docs;
}

export default async function ProductGrid() {
  const products = await getProducts();

  if (!products || products.length === 0) {
    return (
      <section id="products" className="py-20 text-center">
        <p className="text-gray-500">No products available</p>
      </section>
    );
  }

  return (
    <section id="products" className="bg-white text-black py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product: any) => (
          <Link key={product.id} href={`/products/${product.slug}`}>
            <div className="group border rounded-lg overflow-hidden bg-white hover:shadow-2xl transition duration-300 cursor-pointer transform hover:-translate-y-1">

              {product.image?.url && (
                <img
                src={`http://127.0.0.1:3001${product.image.url}`}
                alt={product.title}
                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              )}

            <div className="p-5">
            <h3 className="text-xl font-bold mb-2 group-hover:underline">
                {product.title}
            </h3>

            <p className="font-semibold mb-2 text-lg">
                ${product.price}
            </p>

            <p className="text-sm text-gray-600">
                {product.description}
            </p>
            </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}