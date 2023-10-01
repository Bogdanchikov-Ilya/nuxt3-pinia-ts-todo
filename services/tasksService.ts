import {useMyFetch} from "~/composables/useMainApi";
import {TaskItem} from "~/models/taskItem.model";
import {taskErrors} from "~/models/taskError.model";
import {options} from "kolorist";
import cac from "cac";
import { useCookie } from "#app";


export function validateTask(data: any): taskErrors {
  const errors: taskErrors = {}
  if (!data.title) {
    errors.title = 'Не введен текст задачи'
  }
  return errors
}

export async function getTasks() {
  const token = useCookie('token');
  console.log(token.value, '2222222')
  try {
    const res = await useMyFetch('api/task', {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
      // method: "POST",
    })
    return res
  } catch(e) {
    console.log(e);
    throw e
  }
}

// export async function getTaskById(id: number): Promise<TaskItem | null> {
//   const {data} = await useMainApi<TaskItem>(`api/task/${id}`);
//   return data.value
// }
//
// export async function createTask(data) {
//   const res = await useMainApi<TaskItem>(`api/task`, {
//     method: 'POST',
//     body: data,
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('token')}`
//     }
//   });
//   return res
// }
//
// export async function updateTask(id: number, payload: any): Promise<TaskItem | null> {
//   const {data} = await useMainApi<TaskItem>(`api/task/${id}`, {
//     method: 'PATCH',
//     body: payload
//   });
//   return data.value
// }
//
// export async function deleteTask(id: number) {
//   return useMainApi<TaskItem>(`api/task/${id}`, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('token')}`
//     },
//     method: 'DELETE',
//   });
// }