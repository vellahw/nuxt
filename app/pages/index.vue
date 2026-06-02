<script setup lang="ts">
import Button from "~/components/base/foo/Button.vue";
</script>

<template>
  <div>
    <h1 class="title">Welcome to the homepage</h1>
    <AppAlert> 이것은 자동 import된 컴포넌트입니다 </AppAlert>
    <Button />
  </div>
</template>

<style>
@import url("~/assets/css/index.css");
</style>
