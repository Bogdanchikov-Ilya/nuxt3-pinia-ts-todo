<template>
  <div class="index-wrapper">
   <h1>Welcome to the homepage</h1>
   <span>{{ doubleCount }}</span>
   <button type="button" @click="increment">click</button>
   <TodoList />
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import {useCounterStore} from "~/stores/index.js";
const store = useCounterStore()
// `name` and `doubleCount` are reactive refs
// This will also extract refs for properties added by plugins
// but skip any action or non reactive (non ref/reactive) property
const { name, count, doubleCount } = storeToRefs(store)
// the increment action can just be destructured
const { increment } = store

</script>
<style>
.index-wrapper{
  position: relative;
}
</style>