<template>
  <div>
    <h1 class="title">Welcome to the homepage</h1>
    <!-- public 폴더 -->
    <img src="/img/me.png" alt="image" />
    <!-- assets 폴더 -->
    <img src="~/assets/img/me2.jpeg" alt="image" />
    <AppAlert> 이것은 자동 import된 컴포넌트입니다 </AppAlert>
  </div>
</template>

<style>
@import url("~/assets/css/index.css");
</style>
