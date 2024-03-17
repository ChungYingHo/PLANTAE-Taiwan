export const useCartStore = defineStore('cart', () => {
  const cartData = reactive({
    name: '',
    address: '',
    phone: '',
    email: '',
    delivery: 0
  })

  return {
    cartData
  }
})
