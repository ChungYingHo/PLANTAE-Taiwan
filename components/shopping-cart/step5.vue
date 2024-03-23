<!-- 最終確認 -->
<script setup lang="ts">
import { useCartStore } from '../../stores/userInfo'
const useCart = useCartStore()
</script>

<template>
  <div>
    <v-card class="px-5">
      <p class="my-2 text-lg">
        訂購商品：<span
          v-for="(item, index) in useCart.cartData.products"
          :key="item.name"
          >{{ item.name }}
          {{ index !== useCart.cartData.products.length - 1 ? ' / ' : ' ' }}
        </span>
      </p>
      <p class="my-2 text-lg">收件人姓名：{{ useCart.cartData.name }}</p>
      <p class="my-2 text-lg">收件人地址：{{ useCart.cartData.address }}</p>
      <!-- <p>{{ useCart.cartData.email }}</p> -->
      <p class="my-2 text-lg">
        宅配方式：{{
          useCart.cartData.delivery === 0 ? '一般宅配' : '冷藏配送'
        }}
      </p>
      <p class="my-2 text-lg">
        付款方式：{{
          useCart.cartData.paySelect === 0 ? '介紹人代收' : '匯款付款'
        }}
      </p>
      <p v-if="useCart.cartData.paySelect === 0" class="my-2 text-lg">
        介紹人：{{ useCart.cartData.introducer }}
      </p>
      <p v-if="useCart.cartData.paySelect === 1" class="my-2 text-lg">
        匯款帳號：{{ useCart.cartData.payAccount }}
      </p>
      <p v-if="useCart.cartData.note !== ''" class="my-2 text-lg">
        備註：{{ useCart.cartData.note }}
      </p>
    </v-card>
  </div>
</template>

<style scoped lang="scss">
/* ... */
</style>
