<template>
  <div class="p-5">
    <TodoCreateTaskModal v-if="isOpenCreateTaskModal" @closeModal="closeModal"/>
    <ul class="d-flex flex-column gap-3 p-0">
      <todo-list-item v-for="(item, index) in getTodoList" 
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
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTodoStore } from '~/stores/todo.ts'
const todoStore = useTodoStore()
const { getTodoList } = storeToRefs(todoStore)
let isOpenCreateTaskModal = ref<boolean>(false)
// одно и тоже что и getters
// const tasksList = computed(() => todoStore.todoList)
const { fetchTasksList } = todoStore
await fetchTasksList()

const closeModal = ():void => {
  isOpenCreateTaskModal.value = false
}
const openCreateTaskModal = ():void => {
  isOpenCreateTaskModal.value = true
}
const deleteTaskItem = (index:number):void => {
  todoStore.deleteTaskItem(index)
}
const finishTask = (value:string, index:number):void => {
  todoStore.finishTask(value, index)
}
const saveTaskItemName = (value:string, index:number):void => {
  todoStore.saveTaskItemName(value, index)
}

</script>
<style>
.add-task{
  position: fixed;
  bottom: 2rem;
  left: 50%
}
</style>
