<template>
  <div class="p-5">
    <ul class="d-flex flex-column gap-3 p-0">
    <todo-list-item v-for="(item, index) in getTodoList" 
    :key="item.id" 
    :id="item.id"
    :name="item.name" 
    :complete="item.complete"
    @deleteTaskItem="deleteTaskItem(index)"
    @saveTaskItemName="saveTaskItemName($event, index)"
    @finishTask="finishTask($event, index)" />
  </ul>
  <button class="btn btn-primary">Добавить задачу</button>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'

import { useTodoStore } from '~/stores/todo.js'
const todoStore = useTodoStore()
const { getTodoList } = storeToRefs(todoStore)

function deleteTaskItem(index) {
  todoStore.deleteTaskItem(index)
}
function finishTask(value, index) {
  todoStore.finishTask(value, index)
}
function saveTaskItemName(value, index) {
  todoStore.saveTaskItemName(value, index)
}
</script>
