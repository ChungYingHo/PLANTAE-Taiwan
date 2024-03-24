import { useProductStore } from '@/stores/productInfo'
const useProduct = useProductStore()

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
      return total + cartData.delivery
    }
  })

  const changeProductQuantity = (flag: boolean, index: number) => {
    if (cartData.products.length > 0) {
      // @ts-ignore
      const name = cartData.products[index].name
      const nameIndex = useProduct.fruitProducts.findIndex(
        (product) => product.name === name
      )
      console.log(name)
      console.log(nameIndex)
      // @ts-ignore
      const unitName = cartData.products[index].unitName
      const unitIndex = useProduct.fruitProducts[nameIndex].unit.findIndex(
        (unit) => unit.unitName === unitName
      )
      console.log(unitName)
      console.log(unitIndex)
      if (flag) {
        // @ts-ignore
        if (cartData.products[index].quantity < 10) {
          // @ts-ignore
          cartData.products[index].quantity++
          useProduct.fruitProducts[nameIndex].unit[index].quantity++
        }
      } else {
        // @ts-ignore
        if (cartData.products[index].quantity >= 1) {
          // @ts-ignore
          cartData.products[index].quantity--
          useProduct.fruitProducts[nameIndex].unit[index].quantity--
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
