<template>
  <div class="p-5">
    <TodoCreateTaskModal v-if="isOpenCreateTaskModal" @closeModal="closeModal"/>
    <ul class="d-flex flex-column gap-3 p-0">
      <todo-list-item v-for="(item, index) in tasksList" 
      :key="item.id" 
      :id="item.id"
      :name="item.title" 
      :complete="item.completed"
      @deleteTaskItem="deleteTaskItem(index)"
      @saveTaskItemName="saveTaskItemName($event, index)"
      @finishTask="finishTask($event, index)" />
  </ul>
  <button class="btn btn-primary add-task" @click="openCreateTaskModal">Добавить задачу</button>
  </div>
</template>
<script setup>
import { useTodoStore } from '~/stores/todo.js'
const todoStore = useTodoStore()
let isOpenCreateTaskModal = ref(false)
const tasksList = computed(() => todoStore.todoList)
const { fetchTasksList } = todoStore
await fetchTasksList()

const closeModal = () => {
  isOpenCreateTaskModal.value = false
}
const openCreateTaskModal = () => {
  isOpenCreateTaskModal.value = true
}
const deleteTaskItem = (index) => {
  todoStore.deleteTaskItem(index)
}
const finishTask = (value, index) => {
  todoStore.finishTask(value, index)
}
const saveTaskItemName = (value, index) => {
  todoStore.saveTaskItemName(value, index)
}

</script>
<style>
.add-task{
  position: fixed;
  bottom: 2rem;
  left: calc(50% - 3rem)
}
</style>
