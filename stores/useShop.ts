// @ts-ignore
import mangoImg from '@/assets/images/products/mango.jpg'
// @ts-ignore
import mangoDryImg from '@/assets/images/products/mango-dry.jpg'
// @ts-ignore
import mangoNoBgImg from '@/assets/images/products/mango-no-bg.png'
// @ts-ignore
import mangoDryNoBgImg from '@/assets/images/products/mango-dry-no-bg.png'

export const useShopStore = defineStore('shop', () => {
  const currentIndex = ref<number>(0)

  const fruitList = reactive([
    {
      name: '愛文芒果',
      img: mangoImg,
      imgNoBg: mangoNoBgImg,
      producer: '植宇宙小夥伴的父母',
      area: '台南市六甲區',
      intro:
        '愛文芒果是台灣特有的品種，果實呈現橙黃色，果肉細緻多汁，甜度高，香氣濃郁，口感極佳，是台灣最受歡迎的水果之一。',
      unit: [
        {
          unitName: '箱 / 10斤',
          price: 600,
          quantity: 0
        },
        {
          unitName: '箱 / 20斤',
          price: 1200,
          quantity: 0
        }
      ]
    },
    {
      name: '芒果乾',
      img: mangoDryImg,
      imgNoBg: mangoDryNoBgImg,
      producer: '植宇宙小夥伴的父母',
      area: '台南市六甲區',
      intro:
        '愛文芒果乾是將愛文芒果去皮、切片、風乾而成，不添加任何防腐劑，保留芒果原有的風味，口感酥脆，是台灣最受歡迎的水果零食之一。',
      unit: [
        {
          unitName: '包 / 250克',
          price: 250,
          quantity: 0
        },
        {
          unitName: '包 / 500克',
          price: 450,
          quantity: 0
        }
      ]
    }
  ])

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

  return {
    currentIndex,
    fruitList,
    cartData
  }
})
