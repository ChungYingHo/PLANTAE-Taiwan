<template>
  <div>
    <NuxtLink to="https://www.instagram.com/plantae_taiwan/" target="_blank">
      <button class="btn size-12 rounded-full" data-content="Instagram">
        <img src="@/assets/icons/ig.png" alt="instagram" class="icon" />
      </button>
    </NuxtLink>
    <NuxtLink to="https://www.facebook.com/plantae.tw" target="_blank">
      <button class="btn size-12 rounded-full" data-content="Facebook">
        <img src="@/assets/icons/facebook.png" alt="instagram" class="icon" />
      </button>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
@mixin tooltip {
  content: attr(data-content);
  position: absolute;
  top: 120%;
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

.emboss {
  box-shadow:
    -6px -6px 16px rgb(255 255 255),
    3px 3px 6px rgb(0 0 0 / 30%);
}

.btn {
  @apply emboss relative flex items-center justify-center;

  &:hover {
    box-shadow:
      -3px -3px 6px rgb(255 255 255),
      1px 1px 6px rgb(0 0 0 / 30%);
  }

  &::after {
    @include tooltip;

    width: calc(100% + 3rem);
  }

  &:hover::after {
    opacity: 1;
  }
}

.icon {
  @apply size-1/2;
}
</style>
