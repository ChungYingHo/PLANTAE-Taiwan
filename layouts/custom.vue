<script setup lang="ts">
const route = useRoute()

const getIconColor = (path: string) => {
  return path === route.path ? 'amber-darken-2' : 'blue-grey-darken-1'
}

const isMenuOpen = ref(false)

const resetMenuOpen = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <div class="custom-container relative h-screen w-screen">
    <div
      class="btn-group fixed right-7 top-1/2 z-10 -translate-y-1/2 rounded-full"
    >
      <!-- menu-btn -->
      <button
        class="menu-btn size-14 rounded-full"
        @click="() => (isMenuOpen = !isMenuOpen)"
      >
        <v-icon
          icon="mdi-apps"
          size="x-large"
          color="blue-grey-darken-1"
        ></v-icon>
      </button>
      <!-- other-btn -->

      <NuxtLink to="/">
        <Transition>
          <button
            v-show="isMenuOpen"
            class="btn btn-home rounded-full p-6"
            data-content="主頁"
            @click="resetMenuOpen"
          >
            <v-icon icon="mdi-home" size="x-large" :color="getIconColor('/')" />
          </button>
        </Transition>
      </NuxtLink>

      <NuxtLink to="/shop">
        <Transition
          ><button
            v-show="isMenuOpen"
            class="btn btn-shop rounded-full p-6"
            data-content="植宇宙雜貨店"
            @click="resetMenuOpen"
          >
            <v-icon
              icon="mdi-gift"
              size="x-large"
              :color="getIconColor('/shop')"
            /></button
        ></Transition>
      </NuxtLink>
      <NuxtLink to="/shopping-cart">
        <Transition
          ><button
            v-show="isMenuOpen"
            class="btn btn-cart rounded-full p-6"
            data-content="購物車"
            @click="resetMenuOpen"
          >
            <v-icon
              icon="mdi-cart-variant"
              size="x-large"
              :color="getIconColor('/shopping-cart')"
            /></button
        ></Transition>
      </NuxtLink>
      <NuxtLink to="/article">
        <Transition
          ><button
            v-show="isMenuOpen"
            class="btn btn-article rounded-full p-6"
            data-content="植宇宙手札"
            @click="resetMenuOpen"
          >
            <v-icon
              icon="mdi-book-open-page-variant"
              size="x-large"
              :color="getIconColor('/article')"
            /></button
        ></Transition>
      </NuxtLink>
    </div>
    <!-- slot here -->
    <slot />
  </div>
</template>

<style scoped lang="scss">
/* @mixin tooltip {
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
} */

.menu-btn {
  box-shadow:
    -6px -6px 16px rgb(255 255 255),
    3px 3px 6px rgb(0 0 0 / 30%);

  &:hover {
    box-shadow:
      -3px -3px 6px rgb(255 255 255),
      1px 1px 6px rgb(0 0 0 / 30%);
  }

  &::after {
    /* @include tooltip; */

    width: calc(100% + 3rem);
  }

  &:hover::after {
    opacity: 1;
  }
}

.btn {
  background-color: transparent;
  position: absolute;
  /* transition: ease-in-out 0.3s; */

  &:hover {
    background-color: rgb(#e0e0e0, 0.3);
  }

  &::after {
    /* @include tooltip; */
    width: calc(100% + 3rem);
  }

  &:hover::after {
    opacity: 1;
  }
}

.btn-home {
  left: -66%;
  top: -200%;
  /* transition-delay: 0.1s; */
}

.btn-shop {
  left: -200%;
  top: -100%;
  /* transition-delay: 0.2s; */
}

.btn-cart {
  left: -200%;
  bottom: -100%;
  /* transition-delay: 0.3s; */
}

.btn-article {
  left: -66%;
  bottom: -200%;
  /* transition-delay: 0.4s; */
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
