import {defineStore} from "pinia"
// import { taskItem } from "@/models/taskItem.model"
export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todoList: null
  }),
  actions: {
    async fetchTasksList() {
      const { data } = await useFetch('https://jsonplaceholder.typicode.com/todos');
      if (data.value) {
        console.log(data.value);
        this.todoList = data.value;
      }
    },
    createTask(taskText) {
      this.todoList.unshift({
        id: Math.round(Math.random()),
        title: taskText,
        completed: false
      })
    },
    deleteTaskItem(index) {
      this.todoList.splice(index, 1)
    },
    finishTask(value, index) {
      this.todoList[index].completed = value
    },
    saveTaskItemName(value, index) {
      console.log(value)
      this.todoList[index].title = value
    }
  },
  getters: {
    getTodoList: s => s.todoList
  }
})