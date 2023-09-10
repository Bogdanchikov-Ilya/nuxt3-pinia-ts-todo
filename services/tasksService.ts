import { useMainApi } from "~/composables/useMainApi";
import {TaskItem} from "~/models/taskItem.model";

interface Errors {
    title?: string;
}

export function validateTask(data: any): Errors {
    const errors: Errors = {}
    if(!data.title) {
        errors.title = 'Не введен текст задачи'
    }
    return errors
}

export async function getTasks(): Promise<TaskItem[] | null> {
    const { data } = await useMainApi<TaskItem[]>('api/task');
    return data.value
}

export async function getTaskById(id:number) :Promise <TaskItem | null> {
    const { data } = await useMainApi<TaskItem>(`api/task/${id}`);
    return data.value
}

export async function updateTask(id:number, payload:any) :Promise <TaskItem | null> {
    const { data } = await useMainApi<TaskItem>(`api/task/${id}`, {
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