<!-- 備註 -->
<script setup lang="ts">
import { useCartStore } from '../../stores/userInfo'
const useCart = useCartStore()

const userNote = ref<string>('')

watch(userNote, () => {
  useCart.cartData.note = userNote.value
})
</script>

<template>
  <div>
    <v-textarea
      v-model="userNote"
      label="留下您想說的話吧！ (選填)"
      row-height="25"
      rows="6"
      variant="outlined"
      auto-grow
      shaped
    ></v-textarea>
  </div>
</template>

<style scoped lang="scss">
/* ... */
</style>
