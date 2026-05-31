<template>
  <div>
    <h1>카운터: {{ counter }}</h1>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
  <div>
    <h1>전역 상태 색상: {{ color }}</h1>
  </div>
</template>

<script setup lang="ts">
const counter = useState("counter", () => Math.round(Math.random() * 100));
const color = useColor(); // 전역 상태
</script>
