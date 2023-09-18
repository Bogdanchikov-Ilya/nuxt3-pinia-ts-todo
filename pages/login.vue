<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="card px-5 py-5" id="form1">
          <div class="form-data">
            <div class="forms-inputs mb-4"> <span>Email or username</span> <input autocomplete="off" type="text" v-model="email">
              <div class="invalid-feedback">A valid email is required!</div>
            </div>
            <div class="forms-inputs mb-4"> <span>Password</span> <input autocomplete="off" type="password" v-model="password">
              <div class="invalid-feedback">Password must be 8 character!</div>
            </div>
            <div class="mb-3"> <button v-on:click.stop.prevent="onSubmit" class="btn btn-dark w-100">Login</button> </div>
          </div>
          <p class="text-danger" v-if="showError">Неверный логин или пароль</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const router = useRouter();
import * as authService from '@/services/authService'
import {awaitExpression} from "@babel/types";

const submitted = ref<boolean>(false)
const email = ref<string>('')
const password = ref<string>('')
const showError = ref<boolean>(false)
const onSubmit = async () => {
  const { data, pending, error, refresh }  = await authService.login(email.value, password.value)
  if(error.value && error.value.statusCode === 401) {
    showError.value = true
    return
  }
  if(data.value) {
    localStorage.setItem('token', data.value.access_token)
    router.push('/')
  }
}
</script>