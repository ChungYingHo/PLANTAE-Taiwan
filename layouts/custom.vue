<script setup lang="ts">
const route = useRoute()

const getIconColor = (path: string) => {
  return path === route.path ? 'amber-darken-2' : 'blue-grey-darken-1'
}
</script>

<template>
  <div class="custom-container relative h-screen w-screen">
    <div
      class="btn-group absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-10"
    >
      <NuxtLink to="/">
        <button class="btn relative rounded-2xl p-8" data-content="主頁">
          <v-icon icon="mdi-home" size="x-large" :color="getIconColor('/')" />
        </button>
      </NuxtLink>
      <NuxtLink to="/shop">
        <button
          class="btn relative rounded-2xl p-8"
          data-content="植宇宙雜貨店"
        >
          <v-icon
            icon="mdi-gift"
            size="x-large"
            :color="getIconColor('/shop')"
          />
        </button>
      </NuxtLink>
      <NuxtLink to="/shopping-cart">
        <button class="btn relative rounded-2xl p-8" data-content="購物車">
          <v-icon
            icon="mdi-cart-variant"
            size="x-large"
            :color="getIconColor('/shopping-cart')"
          />
        </button>
      </NuxtLink>
      <NuxtLink to="/article">
        <button class="btn relative rounded-2xl p-8" data-content="植宇宙手札">
          <v-icon
            icon="mdi-book-open-page-variant"
            size="x-large"
            :color="getIconColor('/article')"
          />
        </button>
      </NuxtLink>
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
@mixin tooltip {
  content: attr(data-content);
  position: absolute;
  top: 102%;
  left: 50%;
  padding: 5px 10px;
  text-align: center;
  transform: translateX(-50%);
  color: #fff;
  background-color: rgb(0 0 0 / 50%);
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.btn {
  background-color: transparent;

  &:hover {
    background-color: #e0e0e0;
  }

  &::after {
    /* @include tooltip; */
    width: calc(100% + 3rem);
  }

  &:hover::after {
    opacity: 1;
  }
}
</style>
