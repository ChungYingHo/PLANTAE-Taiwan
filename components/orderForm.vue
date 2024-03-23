<script setup lang="ts">
import step1 from './shopping-cart/step1.vue'
import step2 from './shopping-cart/step2.vue'
import step3 from './shopping-cart/step3.vue'
import step4 from './shopping-cart/step4.vue'
import step5 from './shopping-cart/step5.vue'

import { useCartStore } from '@/stores/userInfo'
const useCart = useCartStore()

const stepProgress = ref<number>(1)
const currentStep = shallowRef(step1)

const changeProgressColor = (step: number) => {
  return stepProgress.value >= step
    ? 'blue-grey-darken-1'
    : 'blue-grey-lighten-5'
}

const changeProgressIcon = (step: number) => {
  return stepProgress.value > step
    ? 'mdi-check-circle'
    : `mdi-numeric-${step}-circle`
}

const updateCurrentStep = () => {
  switch (stepProgress.value) {
    case 1:
      currentStep.value = step1
      break
    case 2:
      currentStep.value = step2
      break
    case 3:
      currentStep.value = step3
      break
    case 4:
      currentStep.value = step4
      break
    case 5:
      currentStep.value = step5
      break
    default:
      break
  }
}

const stepName = () => {
  switch (stepProgress.value) {
    case 1:
      return '商品確認'
    case 2:
      return '寄送資訊'
    case 3:
      return '付款方式'
    case 4:
      return '備註'
    case 5:
      return '最終確認'
    default:
      return ''
  }
}

// todo 驗證表單
const validProduct = (products: any[]) => {
  if (products.length === 0) {
    return false
  }
  return true
}

const validName = (name: string) => {
  if (name.length < 2) {
    return false
  }
  return true
}

const validAddress = (address: string) => {
  if (address.length < 5) {
    return false
  }
  return true
}

const validPhone = (phone: string) => {
  if (phone.length < 7) {
    return false
  }
  return true
}

const validPay = (
  paySelect: number,
  introducer: string,
  payAccount: string
) => {
  if (paySelect === 0 && introducer.length < 2) {
    return false
  }
  if (paySelect === 1 && payAccount.length < 6) {
    return false
  }
  return true
}

// step
const handleNextStep = () => {
  if (stepProgress.value === 1) {
    if (!validProduct(useCart.cartData.products)) {
      return
    }
  }
  if (stepProgress.value === 2) {
    if (
      !validName(useCart.cartData.name) ||
      !validAddress(useCart.cartData.address) ||
      !validPhone(useCart.cartData.phone)
    ) {
      return
    }
  }
  if (stepProgress.value === 3) {
    if (
      !validPay(
        useCart.cartData.paySelect,
        useCart.cartData.introducer,
        useCart.cartData.payAccount
      )
    ) {
      return
    }
  }
  stepProgress.value += 1
  updateCurrentStep()
  console.log(useCart.cartData)
}

const handlePrevStep = () => {
  stepProgress.value -= 1
  updateCurrentStep()
}
</script>

<template>
  <div class="form-container flex h-full flex-col">
    <!-- 進度條 -->
    <div class="form-progress flex flex-col gap-1">
      <div class="flex items-center justify-center gap-5 py-3">
        <v-icon
          :icon="changeProgressIcon(1)"
          size="x-large"
          :color="changeProgressColor(1)"
        />
        <v-icon
          icon="mdi-pan-right"
          size="large"
          :color="changeProgressColor(1)"
        />
        <v-icon
          :icon="changeProgressIcon(2)"
          size="x-large"
          :color="changeProgressColor(2)"
        />
        <v-icon
          icon="mdi-pan-right"
          size="large"
          :color="changeProgressColor(2)"
        />
        <v-icon
          :icon="changeProgressIcon(3)"
          size="x-large"
          :color="changeProgressColor(3)"
        />
        <v-icon
          icon="mdi-pan-right"
          size="large"
          :color="changeProgressColor(3)"
        />
        <v-icon
          :icon="changeProgressIcon(4)"
          size="x-large"
          :color="changeProgressColor(4)"
        />
        <v-icon
          icon="mdi-pan-right"
          size="large"
          :color="changeProgressColor(4)"
        />
        <v-icon
          :icon="changeProgressIcon(5)"
          size="x-large"
          :color="changeProgressColor(5)"
        />
      </div>
      <p class="text-lg">{{ stepName() }}</p>
    </div>

    <!-- 表單 -->
    <div class="form-content flex-1 pb-5">
      <KeepAlive>
        <component :is="currentStep"></component>
      </KeepAlive>
    </div>
    <!-- 下一步 -->
    <div
      class="form-btn-group mb-5 flex items-center"
      :class="{
        'justify-end': stepProgress === 1,
        'justify-between': stepProgress > 1
      }"
    >
      <v-btn
        v-show="stepProgress > 1"
        prepend-icon="mdi-chevron-left"
        @click="handlePrevStep"
      >
        上一步
        <template #prepend>
          <v-icon color="primary"></v-icon>
        </template>
      </v-btn>
      <v-btn
        v-show="stepProgress < 5"
        append-icon="mdi-chevron-right"
        @click="handleNextStep"
      >
        下一步
        <template #append>
          <v-icon color="success"></v-icon>
        </template>
      </v-btn>
      <v-btn v-show="stepProgress === 5" append-icon="mdi-check-circle-outline">
        確認訂單
        <template #append>
          <v-icon color="success"></v-icon>
        </template>
      </v-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-progress {
  height: 15vh;
}

.form-content {
  height: 65vh;
}

.form-btn-group {
  height: 10vh;
}
</style>
