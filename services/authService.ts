import {useMainApi} from "~/composables/useMainApi";
export async function login(email: string, password: string) {
  try {
    const res = await useMainApi('api/auth/login', {
      method: 'POST',
      body: {
        email, password
      }
    })
    return res
  } catch (e: any) {
    return e
  }
}