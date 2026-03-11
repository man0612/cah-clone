"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/store/cart";
import Navbar from "@/components/Navbar";
import { addToCart } from "@/lib/cart"

async function getProduct(slug: string) {
  const res = await fetch(
    `http://127.0.0.1:3001/api/products?where[slug][equals]=${slug}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const data = await res.json();
  return data.docs[0];
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { addItem } = useCart();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    async function loadProduct() {
      const { slug } = await params;
      const data = await getProduct(slug);
      setProduct(data);
    }

    loadProduct();
  }, [params]);

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="p-20 text-center">
          <h1 className="text-3xl">Loading...</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-white text-black py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Image */}
          <div>
            {product.image?.url && (
              <img
                src={`http://127.0.0.1:3001${product.image.url}`}
                alt={product.title}
                className="w-full rounded-lg"
              />
            )}
          </div>

          {/* Product Info */}
          <div>

            <h1 className="text-5xl font-bold mb-6">
              {product.title}
            </h1>

            <p className="text-2xl font-semibold mb-6">
              ${product.price}
            </p>

            <p className="text-lg text-gray-700 mb-10">
              {product.description}
            </p>

            <button
  className="bg-black text-white px-8 py-4 text-lg hover:bg-gray-800 transition"
  onClick={() => addToCart("variant_01KKF1J11PB7P7NC61QBB2F6CA")}
>
  Add to Cart
</button>

          </div>

        </div>
      </main>
    </>
  );
}