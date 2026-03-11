import { medusa } from "./medusa"

/* Create cart */
export async function createCart() {
  const { cart } = await medusa.carts.create({
    region_id: "reg_01KKESSZ9PT91WB1Q39JPKTKF4",
  })

  localStorage.setItem("cart_id", cart.id)

  return cart
}


/* Add item to cart */
export async function addToCart(variantId: string) {
  try {
    let cartId = localStorage.getItem("cart_id")

    if (!cartId) {
      const cart = await createCart()
      cartId = cart?.id
    }

    if (!cartId) return

    const { cart } = await medusa.carts.lineItems.create(cartId, {
      variant_id: variantId,
      quantity: 1,
    })

    return cart
  } catch (error) {
    console.error("Add to cart failed", error)
  }
}


/* Get existing cart */
export async function getCart() {
  try {
    const cartId = localStorage.getItem("cart_id")

    if (!cartId) return null

    const { cart } = await medusa.carts.retrieve(cartId)

    return cart
  } catch (error) {
    console.error("Failed to retrieve cart", error)
  }
}