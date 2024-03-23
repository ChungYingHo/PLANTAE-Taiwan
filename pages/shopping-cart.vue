<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
</script>

<template>
  <div
    class="cart-container relative flex h-screen w-screen items-center justify-center"
  >
    <div class="cart-sub-container flex w-10/12 p-3">
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
  background-color: #c0c0c0;
}

.cart-sub-container {
  height: 90vh;
}

.cart-com-container {
  /* border: 1px solid #e0e0e0; */
  box-shadow:
    -3px -3px 8px rgb(255 255 255),
    3px 3px 6px rgb(0 0 0 / 30%);
}
</style>
