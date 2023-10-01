<template>
  <div>
    (Default) Лэйаут на всех страницах
    <button @click="logout">
      logout
    </button>
    <slot />
  </div>
</template>
<script lang="ts" setup>
import {useCookie} from "#app";
const router = useRouter();
const logout = () => {
  const token = useCookie('token');
  token.value = null
  router.push('/login')
}
</script>