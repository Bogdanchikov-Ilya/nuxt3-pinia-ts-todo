import {useMainApi} from "~/composables/useMainApi";
import {TaskItem} from "~/models/taskItem.model";
import {taskErrors} from "~/models/taskError.model";
import {options} from "kolorist";


export function validateTask(data: any): taskErrors {
  const errors: taskErrors = {}
  if (!data.title) {
    errors.title = 'Не введен текст задачи'
  }
  return errors
}

export async function getTasks(): Promise<TaskItem[] | null> {
  const {data} = await useMainApi<TaskItem[]>('api/task', {
    headers: {
      // Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  console.log(data)
  return data.value
}

export async function getTaskById(id: number): Promise<TaskItem | null> {
  const {data} = await useMainApi<TaskItem>(`api/task/${id}`);
  return data.value
}

export async function updateTask(id: number, payload: any): Promise<TaskItem | null> {
  const {data} = await useMainApi<TaskItem>(`api/task/${id}`, {
    method: 'PATCH',
    body: payload
  });
  return data.value
}

export async function deleteTask(id: number) {
  return useMainApi<TaskItem>(`api/task/${id}`, {
    method: 'DELETE',
  });
}