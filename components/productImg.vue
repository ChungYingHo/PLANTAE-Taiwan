<script setup lang="ts">
import { useProductStore } from '@/stores/productInfo'
const useProduct = useProductStore()
const { currentIndex } = storeToRefs(useProduct)

const currentImgIndex = ref<number>(0)
const leaving = ref<boolean>(false)
const entering = ref<boolean>(false)

function changeImage(index: number) {
  if (index !== currentImgIndex.value) {
    leaving.value = true
    currentImgIndex.value = index
    setTimeout(() => {
      entering.value = true
    }, 500) // 動畫持續時間為 0.5 秒
  }
}

function handleTransitionEnd() {
  if (leaving.value) {
    leaving.value = false
  }
  if (entering.value) {
    entering.value = false
  }
}

watch(currentImgIndex, (newIndex) => {
  currentIndex.value = newIndex
})
</script>

<template>
  <div class="product-img-container relative h-full w-full">
    <img
      :src="useProduct.fruitProducts[currentImgIndex].imgNoBg"
      alt="product-img"
      class="product-img absolute left-0 top-0"
      :class="{ leaving: leaving, entering: entering }"
      @transitionend="handleTransitionEnd"
    />
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
  transition: transform 0.5s ease;
  transform: translateY(0);
}

.leaving {
  transform: translateY(-150%);
  opacity: 0.2;
}

.entering {
  transform: translateY(0);
  opacity: 1;
}

.product-img-btn {
  border-radius: calc(1rem + 0.75rem);
}

.active {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
