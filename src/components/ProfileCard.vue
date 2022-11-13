<style>
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
</style>


<template>
   
  
   <div
     class="rounded-lg border-2 py-6 shadow-lg backdrop-blur-sm  bg-pink-100/40 transition duration-300 ease-in-out  hover:bg-sky-300/50 hover:shadow-sky-600/50 hover:scale-105"
   >
      
    <div
       class="relative h-60 w-60 rounded-full overflow-hidden bg-pink-300 mx-auto border-violet-900/70 border-2 hover:scale-95"
     >
       <img :src="image" alt="">
       <div class="h-full bg-cover bg-center bg-no-repeat" :style="getUrlImage(image)"></div>
       
   
     </div>
     
     <div class="w-2/3 mx-auto">
      <div class="text-3xl font-extrabold hover:scale-95">
      <span class="bg-clip-text text-transparent bg-gradient-to-r" style="background-image: url(https://i.pinimg.com/originals/08/f6/78/08f6786eb23a9b86403e105180578d6c.gif)">
        {{ name }}
  </span>
    </div>
       
       <div class="text-white text-lg">{{ birthday }}</div>
       <div class="text-white text-lg font-normal">{{ study }}</div>
     </div>
 
     <div class="w-2/3 mx-auto text-right space-x-3 border-t-2 p-2 mt-6">
       <a :href="facebook">
              <font-awesome-icon icon="fa-brands fa-facebook" class="text-violet-900/90 text-2xl  hover:text-white hover:animate-bounce hover:scale-125 transition duration-300 "  />   
       </a>
       <a :href="instagram">
              <font-awesome-icon icon="fa-brands fa-instagram" class="text-violet-900/90 text-2xl hover:text-white hover:animate-bounce hover:scale-125 transition duration-300" />   
       </a>
       <a :href="line">
              <font-awesome-icon icon="fa-brands fa-line" class="text-violet-900/90 text-2xl hover:text-white hover:animate-bounce hover:scale-125 transition duration-300" />   
       </a>
       
       
     </div>
   </div>
 </template>
 
 <script>
 export default {
   props: {
     name: {
       type: String,
       default: "A B",
     },
     birthday: {
       type: String,
       default: "5 July 2004",
     },
     study: {
       type: String,
       default: "6510450721",
     },
     content: {
       type: String,
       default: "",
     },
     image: {
       type: String,
       default: "https://i.pinimg.com/564x/5d/a4/f5/5da4f5b4e1d7edc3af20ec3287c76b1e.jpg",
     },
     facebook:{
      type: String,
      default: "https://web.facebook.com/pattanan.eksakul"
     },
     instagram:{
      type: String,
      default: "https://instagram.com/mindptnie?igshid=NjZiMGI4OTY="
     },
     line:{
      type: String,
      default: "https://line.me/ti/p/uZN1NaC656"
     }
   },
   methods:
   {
     getUrlImage(imagePath)
     {
      return { 'background-image': 'url("' + imagePath + '")' };
     },
   }
 }
 </script>