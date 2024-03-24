<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
</script>

<template>
  <div class="shop-container flex h-full w-full items-center">
    <div class="shop-sub-container ml-5 flex w-11/12 justify-around">
      <div class="shop-category h-full w-2/12">
        <sideBar />
      </div>
      <div class="shop-products h-full w-5/12">
        <productImg />
      </div>
      <div class="shop-detail h-full w-5/12">
        <productInfo />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.shop-container {
  background: url('@/assets/images/bg-green.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.shop-sub-container {
  height: 90%;
}
</style>
