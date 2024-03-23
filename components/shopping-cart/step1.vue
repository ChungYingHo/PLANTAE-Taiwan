<!-- 商品確認與修改 -->
<script setup lang="ts">
// @ts-ignore
import mango from '@/assets/images/products/mango.jpg'
// @ts-ignore
import mangoDry from '@/assets/images/products/mango-dry.jpg'

import { useCartStore } from '../../stores/userInfo'
const useCart = useCartStore()
</script>

<template>
  <div class="flex h-full flex-col">
    <p class="mb-5 text-xl">商品確認</p>
    <div class="flex-1 overflow-auto">
      <v-row
        v-for="(item, index) in useCart.cartData.products"
        :key="item.name"
        class="text-center"
      >
        <v-col cols="2" class="flex items-center justify-start"
          ><img
            :src="item.name === '愛文芒果 (箱 / 10斤)' ? mango : mangoDry"
            alt="product"
            class="h-20 w-20 rounded-lg"
        /></v-col>
        <v-col cols="4" class="flex items-center justify-start"
          ><p>{{ item.name }}</p></v-col
        >
        <v-col cols="3" class="flex items-center justify-between">
          <v-btn
            density="compact"
            icon="mdi-minus"
            @click="useCart.changeProductQuantity(false, index)"
          ></v-btn>
          <p>{{ item.quantity }}</p>
          <v-btn
            density="compact"
            icon="mdi-plus"
            @click="useCart.changeProductQuantity(true, index)"
          ></v-btn
        ></v-col>
        <v-col cols="3" class="flex items-center justify-end"
          ><p>金額：{{ item.quantity * item.perPrice }}</p></v-col
        >
      </v-row>
    </div>

    <p class="total text-end">總額：{{ useCart.totalPrice }}</p>
  </div>
</template>

<style scoped lang="scss">
.total {
  border-top: #e0e0e0 solid 1px;
  padding-top: 1rem;
}
</style>
