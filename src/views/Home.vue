<template>

  <div v-for="item in routes" :key="item">
    <button @click="goto(item.path)">
      {{ item.name }}
    </button>
  </div>
</template>

<script setup>
//引入路由
import {useRouter} from "vue-router";

const router = useRouter()
//获取全部路由信息
const routes = router.getRoutes()
const goto = (url) => router.push(url)

</script>

<style scoped>

</style>
