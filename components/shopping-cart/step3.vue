<!-- 付款資訊 -->
<!-- todo file validate -->
<script setup lang="ts">
import { useCartStore } from '../../stores/userInfo'
const useCart = useCartStore()

const paySelect = ref<number>(0)
const introducerName = ref<string>('')
const payAccount = ref<string>('')
const payImage = ref<FileList | null>(null)

const nameRules = [
  (value: string) => {
    if (value?.length > 1) return true
    return '請輸入介紹人姓名'
  }
]

const payRules = [
  (value: string) => {
    if (value?.length > 5) return true
    return '請輸入完整匯款帳號'
  }
]

const fileRules = [
  (value: FileList) => {
    return (
      !value ||
      !value.length ||
      value[0].size < 7000000 ||
      '請上傳匯款截圖，檔案大小不得超過7MB'
    )
  }
]

watch([paySelect, introducerName, payAccount, payImage], () => {
  useCart.cartData.paySelect = paySelect.value
  useCart.cartData.introducer = introducerName.value
  useCart.cartData.payAccount = payAccount.value
})
</script>

<template>
  <div>
    <v-alert
      :text="'總額：' + useCart.totalPrice"
      type="info"
      density="compact"
    ></v-alert>
    <v-radio-group v-model="paySelect" class="mt-2">
      <v-radio label="介紹人代收" :value="0"></v-radio>
      <v-text-field
        v-if="paySelect === 0"
        v-model="introducerName"
        label="介紹人姓名"
        :rules="nameRules"
        class="mt-5"
      ></v-text-field>
      <v-radio
        label="匯款付款 (植宇宙匯款帳號：xxxxxxxxxxx)"
        :value="1"
      ></v-radio>
      <div v-if="paySelect === 1">
        <v-text-field
          v-model="payAccount"
          label="您的匯款帳號"
          :rules="payRules"
          class="mt-2"
        ></v-text-field>
        <v-file-input
          v-model="payImage"
          :rules="fileRules"
          accept="image/png, image/jpeg, image/bmp"
          label="匯款截圖"
          placeholder="請上傳匯款截圖"
          prepend-icon="mdi-camera"
        ></v-file-input>
      </div>
    </v-radio-group>
  </div>
</template>

<style scoped lang="scss">
/* ... */
</style>
