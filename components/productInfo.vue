<script setup lang="ts">
import { useProductStore } from '@/stores/productInfo'
const useProduct = useProductStore()
const { currentIndex } = storeToRefs(useProduct)
import { useCartStore } from '@/stores/userInfo'
const useCart = useCartStore()

const handleSubmit = (list: any[], itemName: string) => {
  const data = reactive<any>([])

  list.forEach(
    (item: { quantity: number; unitName: string; price: number }) => {
      if (item.quantity > 0) {
        const newItem = {
          name: itemName,
          unitName: item.unitName,
          perPrice: item.price,
          quantity: item.quantity
        }
        data.push(newItem)
      }
    }
  )

  data.forEach((product: any) => {
    const existingProductIndex = useCart.cartData.products.findIndex(
      (existingProduct) =>
        // @ts-ignore
        existingProduct.name === product.name &&
        // @ts-ignore
        existingProduct.unitName === product.unitName
    )

    if (existingProductIndex !== -1) {
      // @ts-ignore
      useCart.cartData.products[existingProductIndex].quantity =
        product.quantity
    } else {
      // @ts-ignore
      useCart.cartData.products.push(product)
    }
  })

  console.log(useCart.cartData.products)
}

onMounted(() => {
  currentIndex.value = 0
  useProduct.fruitProducts.forEach((item) => {
    item.unit.forEach((unit) => {
      unit.quantity = 0
    })
  })
})
</script>

<template>
  <div
    class="product-info-container flex h-full w-full flex-col items-center justify-center"
  >
    <div class="product-info-text w-3/4">
      <h2 class="title mb-7 text-5xl font-extrabold">
        {{ useProduct.fruitProducts[currentIndex].name }}
      </h2>
      <p class="text-lime-600">生產人：</p>
      <p class="mb-5 text-lg">
        {{ useProduct.fruitProducts[currentIndex].producer }}
      </p>
      <p class="text-lime-600">產地：</p>
      <p class="mb-5 text-lg">
        {{ useProduct.fruitProducts[currentIndex].area }}
      </p>
      <p class="text-lime-600">介紹：</p>
      <p class="mb-5 text-lg">
        {{ useProduct.fruitProducts[currentIndex].intro }}
      </p>
    </div>
    <!-- 商品規格 -->
    <div class="product-info-unit w-full">
      <div
        v-for="(item, index) in useProduct.fruitProducts[currentIndex].unit"
        :key="item.unitName"
        class="flex w-full items-center justify-between p-2"
      >
        <p>規格{{ index + 1 }} - {{ item.unitName }}</p>
        <p>價格：{{ item.price }} 元</p>
        <div class="flex w-1/3 items-center justify-between">
          <v-btn
            density="compact"
            icon="mdi-minus"
            @click="useProduct.setQuantity(index, false)"
          ></v-btn>
          <p>{{ item.quantity }}</p>
          <v-btn
            density="compact"
            icon="mdi-plus"
            @click="useProduct.setQuantity(index, true)"
          ></v-btn>
        </div>
      </div>
    </div>
    <!-- submit btn -->
    <v-btn
      prepend-icon="mdi-cart-variant"
      class="mt-10"
      @click="
        handleSubmit(
          useProduct.fruitProducts[currentIndex].unit,
          useProduct.fruitProducts[currentIndex].name
        )
      "
    >
      加入購物車
      <template #prepend>
        <v-icon color="success"></v-icon>
      </template>
    </v-btn>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #b0b0b0;
  text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.5rem;
}
</style>
