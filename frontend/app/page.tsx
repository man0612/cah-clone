import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import { getHero } from "../lib/cms";

export default async function Home() {
  const hero = await getHero();

  return (
    <main>
      <Navbar />

      <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold mb-6">
          {hero?.title || "Cards Against Humanity"}
        </h1>

        <p className="text-xl max-w-xl mb-8">
          {hero?.subtitle || "A party game for horrible people"}
        </p>

        <a
          href="#products"
          className="border border-white px-8 py-3 text-lg hover:bg-white hover:text-black transition"
        >
          {hero?.buttonText || "Shop Now"}
        </a>
      </section>

      <ProductGrid />
    </main>
  );
}