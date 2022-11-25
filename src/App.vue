<!-- <script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template> -->

<template>

  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import storeVuex from './storeVuex'




export default {
  setup() {
    const storeVuex = useStore()
    onBeforeMount(() => {
      storeVuex.dispatch('fetchUser')
    })
  }
}

</script>
<style>
/* box ของ login กับ register เปลี่ยนได้ */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>