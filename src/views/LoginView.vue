<style>
h1 {
  font-size: 50px;
  color:aliceblue;
  
}

input[type=submit] {
  width: 70%;
  color: white;
  padding: 10px 15px;
  margin: 20px 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-image: url(https://i.pinimg.com/originals/39/11/67/3911670998d047b7cd509b495af00ffa.gif);
}

input[type=submit]:hover {
    background-image: url(https://i.pinimg.com/564x/37/bf/87/37bf877497f72f474024e5b93b832671.jpg);
    scale: 110%;
}
</style>


<template>
  <body class=" bg-no-repeat bg-fixed bg-cover bg-center" style="background-image: url(https://i.pinimg.com/originals/1f/dd/1d/1fdd1dd87c03ceb8d4af123882e9be4a.gif)">
      <div class="flex justify-center items-center min-h-screen">
    <div class=" px-5 py-5 backdrop-blur-sm bg-purple-500/20 rounded-lg outline outline-offset-2 outline-white">
      
      <main class="login">
    <section class="forms">
        <form class="login" @submit.prevent="login">
          <h1 class="bg-clip-text text-transparent bg-gradient-to-r" style="background-image: url(https://i.pinimg.com/originals/f4/7a/82/f47a82a4efc8091a7026305e31b9dc54.gif)">
              LOGIN
              </h1>
            <input type="email" placeholder="Email address" v-model="login_form.email"> <br> <br>
            <input type="password" placeholder="Password" v-model="login_form.password"> <br>
            <div class="text-center flex justify-center items-center ">
            <input type="submit" value="Login">
            </div>
        </form>
    </section>
  </main>
      </div>
      </div>
      <footer
class="fixed bottom-0 left-0 z-20 p-4 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 FESTHAIVAL™ All Rights Reserved.
</span>
<router-link to="/"
  class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 hover:text-blue-600">
  <font-awesome-icon icon="fa-solid fa-home" />  Home
</router-link>

</footer>
      </body>

      
  
</template>
  
<script>
  import { ref } from '@vue/reactivity'
  import { useStore } from 'vuex'
  export default {
      setup() {
          const login_form = ref({});
          const storeVuex = useStore();
  
          const login =  () => {
              storeVuex.dispatch('login', login_form.value);
          }
  
          return {
              login_form,
              login
  
          }
      }
  
  }
  </script>
  
<style>
  
  </style>