import {defineStore} from "pinia"
export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todoList: [
      {id: 1, name: 'test', complete: true},
      {id: 2, name: 'test', complete: true},
      {id: 3, name: 'test', complete: false},
      {id: 4, name: 'test', complete: false},
      {id: 5, name: 'test', complete: false},
    ]
  }),
  actions: {
    createTask(item) {
      this.todoList.push(item)
    },
    deleteTaskItem(index) {
      this.todoList.splice(index, 1)
    },
    finishTask(value, index) {
      this.todoList[index].complete = value
    },
    saveTaskItemName(value, index) {
      this.todoList[index].name = value
    }
  },
  getters: {
    getTodoList: s => s.todoList
  }
})