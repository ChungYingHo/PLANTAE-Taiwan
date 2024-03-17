<script setup lang="ts">
useHead({
  title: '植宇宙 | PLANTAE Taiwan',
  meta: [{ name: 'description', content: '這是測試用網站' }],
  bodyAttrs: {
    class: 'test'
  },
  script: [{ innerHTML: 'console.log(`Hello world`)' }]
})
</script>

<template>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>

<style lang="scss">
html {
  overflow-y: auto;
  font-family: 'Noto Sans TC', sans-serif;
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
