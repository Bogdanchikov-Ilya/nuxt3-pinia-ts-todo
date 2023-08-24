<template>
  <li class="border px-2 py-2 rounded d-flex flex-row justify-content-between align-items-center">
    <input type="checkbox" class="form-check-input" :checked="complete" @change="changeChechbox">
    <input :value="name" v-show="isEdit" ref="input">
    <span class="fs-5 fw-bold" v-show="!isEdit && !complete">{{ name }}</span>
    <strike class="fs-5 fw-bold" v-show="!isEdit && complete">{{ name }}</strike>
    <button class="btn btn-outline-danger" @click="deleteTaskItem">Удалить</button>
    <button class="btn btn-outline-primary" v-if="isEdit" @click="saveNewTaskName">Сохранить</button>
    <button class="btn btn-outline-primary" @click="setEditTaskName" v-else>Редактировать</button>
  </li>
</template> 
<script setup>
import { ref, nextTick } from 'vue'
const props = defineProps({
  name: String,
  complete: Boolean,
  id: Number
})
const emit = defineEmits(['deleteTaskItem', 'finishTask', 'saveTaskItemName'])

const isEdit = ref(false)

const input = ref(null)

function deleteTaskItem() {
  emit('deleteTaskItem')
}
function changeChechbox(event) {
  emit('finishTask', event.target.checked)
}
async function setEditTaskName(params) {
  isEdit.value = true
  await nextTick()
  input.value.focus()
}
function saveNewTaskName() {
  isEdit.value = false
  emit('saveTaskItemName', input.value.value)
}
</script>