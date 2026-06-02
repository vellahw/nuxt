<script setup lang="ts">
import Button from "~/components/base/foo/Button.vue";
import { useFoo } from "~/composables/base/useFoo";

const foo = useFoo();
</script>

<template>
  <div>
    <h1 class="title">Welcome to the homepage</h1>
    <AppAlert> 이것은 자동 import된 컴포넌트입니다 </AppAlert>
    <Button />
    중첩 composables 폴더 {{ foo }}
  </div>
</template>

<style>
@import url("~/assets/css/index.css");
</style>
