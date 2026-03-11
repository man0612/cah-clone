import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b bg-white text-black">
      <Link href="/" className="text-xl font-bold">
        Cards Against Humanity
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>

        <Link
          href="/cart"
          className="border px-4 py-2 hover:bg-black hover:text-white transition"
        >
          Cart
        </Link>
      </div>
    </nav>
  );
}