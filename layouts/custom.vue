<script setup lang="ts">
// @ts-ignore
import book from '@/assets/icons/book.png'
// @ts-ignore
import news from '@/assets/icons/news.png'
// @ts-ignore
import shoppingCart from '@/assets/icons/shopping-cart.png'
// @ts-ignore
import order from '@/assets/icons/order.png'

const btnList = [
  {
    name: '關於植宇宙',
    src: book,
    link: '/story'
  },
  {
    name: '植宇宙手札',
    src: news,
    link: '/article'
  },
  {
    name: '植宇宙雜貨店',
    src: shoppingCart,
    link: '/shop'
  },
  {
    name: '訂單查詢',
    src: order,
    link: '/order'
  }
]
</script>

<template>
  <div>111</div>
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

.btn {
  background-color: transparent;

  &:hover {
    background-color: #f0f0f0;
  }

  &::after {
    @include tooltip;

    width: calc(100% + 3rem);
  }

  &:hover::after {
    opacity: 1;
  }
}
</style>
