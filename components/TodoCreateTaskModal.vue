<template>
  <div class="modal-background"></div>
  <div class="modal" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Добавление задачи</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for="exampleInputPassword1">Текст</label>
          <input type="text" class="form-control my-2" id="exampleInputPassword1" placeholder="Текст" v-model="taskText">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click="createTask">Добавить задачу</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="emit('closeModal')">Закрыть</button>
      </div>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
// import { useTodoStore } from '~/stores/todo.ts'
// const todoStore = useTodoStore()
import * as taskService from '@/services/tasksService'

const emit = defineEmits<{
  (e: 'closeModal'): void,
  (e: 'updateTasksList'): void
}>()

let taskText = ref<string>('')
const createTask = async () => {
  const data = {
    title: taskText.value
  }
  // await taskService.createTask(data)
  emit('updateTasksList')
  closeModal()
}

const closeModal = ():void => {
  emit('closeModal')
}

</script>

<style>
.modal-background {
  top: 0;
  left: 0;
  position: fixed;
  background: black;
  opacity: .5;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}
.modal{
  display: flex;
}
</style>