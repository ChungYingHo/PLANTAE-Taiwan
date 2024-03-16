<template>
  <div class="letter-container">
    <div class="letter letter-0">P</div>
    <div class="letter letter-1">L</div>
    <div class="letter letter-2">A</div>
    <div class="letter letter-3">N</div>
    <div class="letter letter-4">T</div>
    <div class="letter letter-5">A</div>
    <div class="letter letter-6">E</div>
    <div class="letter letter-7">T</div>
    <div class="letter letter-8">A</div>
    <div class="letter letter-9">I</div>
    <div class="letter letter-10">W</div>
    <div class="letter letter-11">A</div>
    <div class="letter letter-12">N</div>
  </div>
</template>

<style scoped lang="scss">
.letter-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
}

.letter {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(#{min(100%, 100vw / 4, 100vh / 4)} - 1px);
  font-weight: bold;
  color: #fff;
  background-color: #000;
  line-height: 100%;
}
.letter-0 {
  grid-column: 1/2;
  grid-row: 1/5;
}
.letter-1 {
  grid-column: 2/3;
  grid-row: 1/2;
}
.letter-2 {
  grid-column: 3/4;
  grid-row: 1/2;
}
.letter-3 {
  grid-column: 4/5;
  grid-row: 1/2;
}
.letter-4 {
  grid-column: 2/3;
  grid-row: 2/3;
}
.letter-5 {
  grid-column: 3/4;
  grid-row: 2/3;
}
.letter-6 {
  grid-column: 4/5;
  grid-row: 2/3;
}
.letter-7 {
  grid-column: 2/3;
  grid-row: 3/4;
}
.letter-8 {
  grid-column: 3/4;
  grid-row: 3/4;
}
.letter-9 {
  grid-column: 4/5;
  grid-row: 3/4;
}
.letter-10 {
  grid-column: 2/3;
  grid-row: 4/5;
}
.letter-11 {
  grid-column: 3/4;
  grid-row: 4/5;
}
.letter-12 {
  grid-column: 4/5;
  grid-row: 4/5;
}
</style>
