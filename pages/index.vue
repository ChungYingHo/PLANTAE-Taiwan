<script setup lang="ts">
const numShadows = 700

const generateParticle = (numShadows: number): string => {
  let boxShadowValue = ''

  for (let i = 0; i < numShadows; i++) {
    boxShadowValue += `${Math.random() * 2000}px ${Math.random() * 2000}px #4f6036, `
  }

  // 移除最後一個逗號和空格
  boxShadowValue = boxShadowValue.slice(0, -2)

  return boxShadowValue
}

onMounted(() => {
  const boxShadow = generateParticle(numShadows)
  const div = document.querySelector('.particle') as HTMLElement
  div.style.boxShadow = boxShadow
})
</script>

<template>
  <div class="index-container relative flex h-screen w-screen items-center">
    <!-- 浮動粒子 -->
    <div class="particle rounded-full bg-transparent"></div>
    <div
      class="index-sub-container m-auto flex items-center justify-center gap-20"
    >
      <!-- logo -->
      <div
        class="index-mask flex items-center justify-center rounded-full"
      ></div>
      <!-- 文字 -->
      <div class="index-text-container flex flex-col items-center">
        <p class="index-title text-7xl font-extrabold">PLANTAE Taiwan</p>
        <p class="index-sub-title mt-4 text-5xl font-bold">植宇宙</p>
        <p class="index-text mt-8 text-xl font-medium">
          植宇宙秉持著小農職人精神 <br />
          為您嚴選在地新鮮農產品 <br />
          致力開發特色手作商品 <br />
          獻給您，來自大自然的贈禮
        </p>
        <NuxtLink to="/shop">
          <button class="btn mt-16 rounded-full p-2">
            <v-icon icon="mdi-chevron-down" color="blue-grey-darken-1"></v-icon>
          </button>
        </NuxtLink>
      </div>
    </div>

    <p
      class="index-copyright absolute bottom-5 left-1/2 -translate-x-1/2 text-lg font-normal"
    >
      Copyright © 2024 Plantae Taiwan
    </p>
  </div>
</template>

<style scoped lang="scss">
.index-mask {
  background: url('@/assets/images/index.jpg') no-repeat top center;
  background-size: cover;
  -webkit-mask: url('@/assets/logo.png') no-repeat center center;
  mask: url('@/assets/logo.png') no-repeat center center;
  -webkit-mask-size: contain;
  mask-size: contain;
  width: 28rem;
  height: 28rem;
}

.index-container {
  /* background:
    linear-gradient(115deg, #4a627a 50%, transparent 50%) center center / 100%
      100%,
    url('@/assets/images/index.jpg') right center / auto 100%; */

  background-color: #f5f5f5;
}

.index-title,
.index-sub-title {
  color: #b0b0b0;
  text-shadow: -2px -2px 2px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.5rem;
}

.index-title {
  font-family: 'Ubuntu', sans-serif;
}

.index-text {
  color: #b0b0b0;
  /* text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.5); */
  letter-spacing: 0.5rem;
  text-align: center;
  line-height: 2.5rem;
}

.index-copyright {
  color: #b0b0b0;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.2rem;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
}

.btn {
  background-color: rgba(84, 110, 122, 0.1);
  animation: bounce 1s infinite;

  &:hover {
    background-color: rgba(84, 110, 122, 0.3);
  }
}

.particle {
  width: 1.5px;
  height: 1.5px;
  animation: anim-star 100s linear infinite;
}

@keyframes anim-star {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-2000px);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>
