<!-- 寄送資訊 -->
<script setup lang="ts">
import { useCartStore } from '../../stores/userInfo'
const useCart = useCartStore()

const userName = ref<string>('')
const userAddress = ref<string>('')
const userPhone = ref<string>('')
const userEmail = ref<string>('')
const userDelivery = ref<number>(0)

const nameRules = [
  (value: string) => {
    if (value?.length > 1) return true
    return '請輸入姓名'
  }
]

const addressRules = [
  (value: string) => {
    if (value?.length > 5) return true
    return '請輸入完整地址'
  }
]

const phoneRules = [
  (value: string) => {
    if (value?.length >= 7) return true
    return '請輸入正確的電話號碼'
  }
]

// const emailRules = [
//   (value: string) => {
//     if (!value || value === '') return true
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (regex.test(value)) return true
//     return 'Invalid email address.'
//   }
// ]

watch([userName, userAddress, userPhone, userEmail, userDelivery], () => {
  useCart.cartData.name = userName.value
  useCart.cartData.address = userAddress.value
  useCart.cartData.phone = userPhone.value
  useCart.cartData.email = userEmail.value
  useCart.cartData.delivery = userDelivery.value
  console.log(userDelivery.value)
})
</script>

<template>
  <div>
    <p class="mb-5 text-xl">收件資訊</p>
    <div class="mb-3 flex gap-5">
      <v-text-field
        v-model="userName"
        label="姓名"
        :rules="nameRules"
      ></v-text-field>
      <v-text-field
        v-model="userPhone"
        label="聯絡電話"
        :rules="phoneRules"
      ></v-text-field>
    </div>
    <!-- <v-text-field
      v-model="userEmail"
      label="E-mail"
      :rules="emailRules"
      class="mb-3"
    ></v-text-field> -->
    <v-text-field
      v-model="userAddress"
      label="收件地址"
      :rules="addressRules"
      class="mb-3"
    ></v-text-field>
    <div>
      <v-radio-group v-model="userDelivery" inline>
        <template #label>
          <p>選擇配送方式</p>
        </template>
        <v-radio label="免費 - 一般配送" :value="0" class="mr-16"></v-radio>
        <v-radio label="+300 - 冷藏配送" :value="1"></v-radio>
      </v-radio-group>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* ... */
</style>
