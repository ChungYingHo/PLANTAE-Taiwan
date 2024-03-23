export const useCartStore = defineStore('cart', () => {
  const cartData = reactive({
    name: '',
    address: '',
    phone: '',
    email: '',
    delivery: 0,
    paySelect: 0,
    introducer: '',
    payAccount: '',
    payImg: File,
    note: '',
    products: [
      {
        name: '愛文芒果 (箱 / 10斤)',
        perPrice: 600,
        quantity: 1
      },
      {
        name: '芒果乾 (包 / 250克)',
        perPrice: 250,
        quantity: 1
      }
    ]
  })

  const totalPrice = computed(() => {
    let total = 0
    for (const product of cartData.products) {
      total += product.perPrice * product.quantity
    }
    return total + cartData.delivery
  })

  const changeProductQuantity = (flag: boolean, index: number) => {
    if (flag) {
      if (cartData.products[index].quantity < 10)
        cartData.products[index].quantity++
    } else {
      if (cartData.products[index].quantity >= 1) {
        cartData.products[index].quantity--
      }
    }
  }

  return {
    cartData,
    changeProductQuantity,
    totalPrice
  }
})
