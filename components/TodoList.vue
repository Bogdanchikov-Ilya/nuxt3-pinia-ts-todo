<template>
  <div class="p-5">
    {{tasksList}}
    <TodoCreateTaskModal v-if="isOpenCreateTaskModal"
                         @closeModal="closeModal"
                         @updateTasksList="tasksList.refresh"
    />
<!--    {{tasksList.data}}-->
<!--    {{data}}-->
    <ul class="d-flex flex-column gap-3 p-0">
      <todo-list-item v-for="(item, index) in tasksList.data"
      :key="item.id"
      :id="item.id"
      :name="item.title"
      :complete="item.completed"
      @deleteTaskItem="deleteTaskItem"
      @saveTaskItemName="saveTaskItemName($event, index)"
      @finishTask="finishTask($event, index)" />
  </ul>
  <button class="btn btn-primary add-task" @click="openCreateTaskModal">Добавить задачу</button>
  </div>
</template>
<script setup lang="ts">
import { TaskItem } from "~/models/taskItem.model";
import * as taskService from '@/services/tasksService'

let isOpenCreateTaskModal = ref<boolean>(false)
let tasksList = ref(await taskService.getTasks() as any)

const closeModal = ():void => {
  isOpenCreateTaskModal.value = false
}
const openCreateTaskModal = ():void => {
  isOpenCreateTaskModal.value = true
}
const deleteTaskItem = async (id:number) => {
  // await taskService.deleteTask(id)
  // await setTasksList()
}
const finishTask = (value:boolean, index:number):void => {
  // todoStore.finishTask(value, index)
}
const saveTaskItemName = (value:string, index:number):void => {
  // todoStore.saveTaskItemName(value, index)
}
</script>
<style>
.add-task{
  position: fixed;
  bottom: 2rem;
  left: 50%
}
</style>
