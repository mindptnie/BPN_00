<style>
@import url('https://fonts.googleapis.com/css2?family=Calistoga&family=Concert+One&family=Mali:wght@300&display=swap');
</style>

<template>
   <body class="h-screen bg-no-repeat bg-cover bg-center" style="background-image: url(https://i.pinimg.com/originals/aa/c0/00/aac000c13b07fc19d355c3bb40ad6a3f.gif)">

  <div class="flex justify-center items-center min-h-screen">
  <div class="w-1/2 text-center px-5 py-9 backdrop-blur-sm bg-gray-800/40 rounded-lg animate-fadeIn hover:scale-105">
    <div class="text-9xl font-extrabold ...">
      <span class="bg-clip-text text-transparent bg-gradient-to-r" style="background-image: url(https://i.pinimg.com/originals/05/26/df/0526df52f22b85c8ef38d2baa11b3ede.gif)">
    BPN
  </span>
    </div>
    <div class="animate-bounce mt-3 text-4xl font-extrabold ...">
      <span class="bg-clip-text text-transparent bg-gradient-to-r" style="background-image: url(https://i.pinimg.com/originals/05/26/df/0526df52f22b85c8ef38d2baa11b3ede.gif)">
    cool as a cucumber
  </span>
    </div>
    

    <div class="mt-4 text-xl font-itim w-2/3 mx-auto text-white">
      BPN is a group that consists of three individuals who are always eager for knowledge and new skills. Even though we are not that talented,<br>
      with practice, we hope that someday we can become professional developers."
    </div>
    
    <div class="mt-4 ">
      <button class="text-xl font-bold text-white font-itim p-3 rounded-lg bg-pink-400 shadow-xl shadow-pink-600/50 
      transition ease-in-out delay-100 hover:bg-green-400 hover:shadow-green-500/50 hover:scale-105">
      <router-link to="/profile"><font-awesome-icon icon="fa-solid fa-user" /> PROFILE PAGE</router-link>
      </button>
    </div>
    
  </div>
</div>
  
 </body>




</template>

<script>
import ProfileCardVue from '../components/ProfileCard.vue';
export default {
  components:{
    ProfileCardVue
  }
}
</script>

