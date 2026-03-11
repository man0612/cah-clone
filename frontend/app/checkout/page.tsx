"use client"

import { useState } from "react"
import { medusa } from "@/lib/medusa"

export default function CheckoutPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleCheckout() {
    const cartId = localStorage.getItem("cart_id")

    if (!cartId) return

    setLoading(true)

    await medusa.carts.update(cartId, {
      email: email,
    })

    alert("Checkout started!")

    setLoading(false)
  }

  return (
    <div className="max-w-xl mx-auto p-20">
      <h1 className="text-4xl font-bold mb-10">
        Checkout
      </h1>

      <input
        type="email"
        placeholder="Email address"
        className="border w-full p-3 mb-6"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleCheckout}
        className="bg-black text-white px-8 py-3"
      >
        {loading ? "Processing..." : "Continue"}
      </button>
    </div>
  )
}