<script setup lang="ts">
const sideBarList = ['小農水果系列', '植宇宙周邊系列']
</script>

<template>
  <div
    class="side-bar-container flex h-full w-full flex-col items-center justify-center gap-16"
  >
    <button
      v-for="item in sideBarList"
      :key="item"
      class="side-bar-btn w-8/12 rounded-lg py-3 text-lg"
    >
      {{ item }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.side-bar-btn {
  box-shadow:
    -6px -6px 16px rgb(255 255 255),
    3px 3px 6px rgb(0 0 0 / 30%);

  &:hover {
    box-shadow:
      -3px -3px 6px rgb(255 255 255),
      1px 1px 6px rgb(0 0 0 / 30%);
  }
}
</style>
