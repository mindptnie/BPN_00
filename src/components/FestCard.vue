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
    
   <div>
     <time class="mb-1 font-normal leading-none text-yellow-300">{{ date }}</time>
     <h3 class="text-lg text-white">{{ name }}</h3>
   
     <div class="tooltip text-sky-300 hover:text-sky-600"> > read more
       <span class="tooltiptext">
         <p class="word-break: break-all">{{ info }}</p>
       </span>
     </div>
    
      
    </div>
  </div>
</template>
 
<script>
 export default {
   props: {
     name: {
       type: String,
       default: "Songkran Festival",
     },
     date: {
       type: String,
       default: "01/01/2023",
     },
     info: {
       type: String,
       default: "aaaaaaa",
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