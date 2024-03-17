<script setup lang="ts">
import step1 from './shopping-cart/step1.vue'
import step2 from './shopping-cart/step2.vue'
import step3 from './shopping-cart/step3.vue'
import step4 from './shopping-cart/step4.vue'

import { useCartStore } from '@/stores/userInfo'
const useCart = useCartStore()

const stepProgress = ref<number>(1)
const currentStep = shallowRef(step1)

const changeProgressColor = (step: number) => {
  return stepProgress.value >= step
    ? 'blue-grey-darken-1'
    : 'blue-grey-lighten-4'
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
    default:
      break
  }
}

const handleNextStep = () => {
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
  <div class="form-container flex h-full flex-col justify-around gap-2">
    <!-- 進度條 -->
    <div class="form-progress flex items-center justify-center gap-5 py-3">
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
    </div>
    <!-- 表單 -->
    <div class="form-content flex-1">
      <KeepAlive>
        <component :is="currentStep"></component>
      </KeepAlive>
    </div>
    <!-- 下一步 -->
    <div
      class="form-btn-group mb-5 flex"
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
        v-show="stepProgress < 4"
        append-icon="mdi-chevron-right"
        @click="handleNextStep"
      >
        下一步
        <template #append>
          <v-icon color="success"></v-icon>
        </template>
      </v-btn>
      <v-btn v-show="stepProgress === 4" append-icon="mdi-check-circle-outline">
        確認訂單
        <template #append>
          <v-icon color="success"></v-icon>
        </template>
      </v-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* .. */
</style>
