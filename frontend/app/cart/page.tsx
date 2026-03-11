"use client"

import { useEffect, useState } from "react"
import { getCart } from "@/lib/cart"

export default function CartPage() {
  const [cart, setCart] = useState<any>(null)

  useEffect(() => {
    async function loadCart() {
      const cartData = await getCart()
      setCart(cartData)
    }

    loadCart()
  }, [])

  if (!cart || cart.items.length === 0) {
    return (
      <p className="p-20 text-center text-xl">
        Your cart is empty
      </p>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-20">
      <h1 className="text-4xl font-bold mb-10">Cart</h1>

      {cart.items.map((item: any) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b py-6"
        >
          <div className="flex items-center gap-4">

            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-20 h-20 object-cover"
            />

            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-500">
                ${item.unit_price / 100}
              </p>
            </div>

          </div>

          <p className="font-bold">
            ${(item.unit_price * item.quantity) / 100}
          </p>
        </div>
      ))}

      <div className="mt-10 flex justify-between items-center">
        <p className="text-2xl font-bold">
          Total: ${cart.total / 100}
        </p>
        <a
        href="/checkout"
        className="bg-black text-white px-8 py-3"
        >
        Checkout
        </a>
      </div>
    </div>
  )
}