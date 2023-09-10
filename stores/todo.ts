import {defineStore} from "pinia"
import { TaskItem } from "@/models/taskItem.model"
import {useMainApi} from "~/composables/useMainApi";

export type RootState = {
  todoList: TaskItem[];
}
export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todoList: []
  } as RootState),
  actions: {
    async fetchTasksList(): Promise<void> {
      const { data } = await useMainApi<TaskItem[]>('api/task');
      if (data.value) {
        this.todoList = data.value;
      }
    },
    createTask(taskText: string):void  {
      this.todoList.unshift({ 
        id: Math.round(Math.random()),
        title: taskText,
        completed: false
      })
    },
    deleteTaskItem(index: number):void {
      this.todoList.splice(index, 1)
    },
    finishTask(value: boolean, index: number):void {
      this.todoList[index].completed = value
    },
    saveTaskItemName(value: string, index: number):void {
      this.todoList[index].title = value
    }
  },
  getters: {
    getTodoList: (state: RootState): TaskItem[] => {
      return state.todoList
    }
  }
})