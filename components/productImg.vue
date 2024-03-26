<script setup lang="ts">
import { useProductStore } from '@/stores/productInfo'
// @ts-ignore
import mangoNoBgImg from '@/assets/images/products/mango-no-bg.png'
// @ts-ignore
import mangoDryNoBgImg from '@/assets/images/products/mango-dry-no-bg.png'

const useProduct = useProductStore()
const { currentIndex } = storeToRefs(useProduct)

const currentImgIndex = ref<number>(0)
const leaving = ref<boolean>(false)
const entering = ref<boolean>(false)

function changeImage(index: number) {
  if (index !== currentImgIndex.value) {
    // leaving.value = true
    currentImgIndex.value = index
    // setTimeout(() => {
    //   entering.value = true
    // }, 500) // 動畫持續時間為 0.5 秒
  }
}

// function handleTransitionEnd() {
//   if (leaving.value) {
//     leaving.value = false
//   }
//   if (entering.value) {
//     entering.value = false
//   }
// }

watch(currentImgIndex, (newIndex) => {
  currentIndex.value = newIndex
})
</script>

<template>
  <div class="product-img-container relative h-full w-full">
    <!-- v-if 圖片切換 -->
    <Transition>
      <img
        v-if="currentImgIndex === 0"
        :src="mangoNoBgImg"
        alt="product-img"
        class="product-img absolute left-0 top-0"
      />
    </Transition>
    <Transition>
      <img
        v-if="currentImgIndex === 1"
        :src="mangoDryNoBgImg"
        alt="product-img"
        class="product-img absolute left-0 top-0"
      />
    </Transition>

    <div
      class="product-img-btn-group absolute bottom-16 left-0 flex w-full justify-center gap-5"
    >
      <button
        v-for="(item, index) in useProduct.fruitProducts"
        :key="index"
        class="product-img-btn p-4"
        :class="{ active: currentImgIndex === index }"
        @click="changeImage(index)"
      >
        <img
          :src="item.img"
          alt="product-img"
          class="product-img-shortcut size-24 rounded-xl"
        />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-img {
  width: 100%;
  height: 50vh;
  object-fit: contain;
  /* transition: transform 0.5s ease;
  transform: translateY(0); */
}

/* .leaving {
  transform: translateY(-150%);
  opacity: 0.2;
}

.entering {
  transform: translateY(0);
  opacity: 1;
} */

.product-img-btn {
  border-radius: calc(1rem + 0.75rem);
}

.active {
  background-color: rgba(0, 0, 0, 0.4);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
