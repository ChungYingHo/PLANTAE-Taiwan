<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
</script>

<template>
  <div class="cart-container relative h-screen w-screen">
    <div class="cart-sub-container mx-auto mt-5 flex w-10/12 p-3">
      <!-- 左側表單 -->
      <div class="cart-com-container h-full w-7/12 rounded-xl px-8">
        <orderForm />
      </div>
      <!-- 右側聲明 -->
      <div class="cart-statement-container h-full w-5/12 rounded-xl px-8">
        <displayStatement />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-container {
  background-color: #f5f5f5;
}

.cart-sub-container {
  height: 77.5%;
}

.cart-com-container {
  border: 1px solid #e0e0e0;
}
</style>
