<template>
  <button @click="router.push('/')">返回</button>
</template>

<script setup>

import {useRouter} from "vue-router";

const router = useRouter()
</script>

<style scoped>

</style>
