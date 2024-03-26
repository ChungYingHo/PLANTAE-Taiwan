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
    payImg: undefined,
    note: '',
    products: [
      // {
      //   name: '0',
      //   unitName: '0',
      //   perPrice: 0,
      //   quantity: 0
      // }
    ]
  })

  const totalPrice = computed(() => {
    if (cartData.products.length > 0) {
      let total = 0
      for (const product of cartData.products) {
        // @ts-ignore
        total += product.perPrice * product.quantity
      }
      return cartData.delivery === 0 ? total : total + 300
    }
  })

  const changeProductQuantity = (flag: boolean, index: number) => {
    if (cartData.products.length > 0) {
      if (flag) {
        // @ts-ignore
        if (cartData.products[index].quantity < 10) {
          // @ts-ignore
          cartData.products[index].quantity++
        }
      } else {
        // @ts-ignore
        if (cartData.products[index].quantity >= 1) {
          // @ts-ignore
          cartData.products[index].quantity--
          // @ts-ignore
          if (cartData.products[index].quantity === 0) {
            cartData.products.splice(index, 1)
          }
        }
      }
    }
  }

  return {
    cartData,
    changeProductQuantity,
    totalPrice
  }
})
