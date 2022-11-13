<template> 

  <body class="h-screen bg-no-repeat bg-cover bg-center" style="background-image: url(https://i.pinimg.com/originals/aa/c0/00/aac000c13b07fc19d355c3bb40ad6a3f.gif)">
    <div class="flex justify-center items-center min-h-screen">
    
    <div class="p-5 mt-3 ">
      <button class="text-xl font-bold text-white font-itim p-3 rounded-lg bg-pink-400 shadow-xl shadow-pink-600/50 
      transition ease-in-out delay-100 hover:animate-pulse hover:bg-green-400 hover:shadow-green-500/50 hover:scale-105">
      <router-link to="/"><font-awesome-icon icon="fa-solid fa-house" />home</router-link>
      </button>
    </div> 
    <div class="mr-5 mt-3 ">
      <div class="text-3xl font-extrabold hover:scale-95">
      <button class="text-xl font-bold text-white font-itim p-3 rounded-lg shadow-xl shadow-violet-400/50 
      transition ease-in-out delay-100 hover:animate-pulse hover:bg-green-400 hover:shadow-lime-500/50 hover:scale-105" style="background-image: url(https://i.pinimg.com/originals/08/f6/78/08f6786eb23a9b86403e105180578d6c.gif)">
      <a href="https://github.com/mindptnie/BPN_EXTRA">MORE INFO</a>

      </button>

    </div>
    </div>
    
    

    <div class="flex flex-row">
        <profileCard v-for="member in members" :key="member" class="w-1/3"
          :al="member.al"
          :name="member.name"
          :birthday="member.birthday"
          :study="member.study"
          :image="member.image"
          :facebook="member.facebook"
          :instagram="member.instagram"
          :line="member.line"/>
              
    </div>

  
 
</div>


</body>




</template>
<script>
import profileCard from "/src/components/ProfileCard.vue";
export default {
   data() {
        return {
             members: [
             {                    
             al: "B",
             name: "Bhanujaya",
             birthday: "8 January 2004",
             study: "6510450780",
             image: "https://i.pinimg.com/564x/2f/e9/44/2fe944b8fa45e8b527d013c9f26551f4.jpg",
             facebook: "https://web.facebook.com/Creamskz",
             instagram: "https://instagram.com/cre_ammz?igshid=YmMyMTA2M2Y=",
             line: "https://line.me/ti/p/OG0PScdEmc"

             },
             {
             al: "P",
             name: "Phattanan",
             birthday: "5 July 2004",
             study: "6510450721",
             image: "https://i.pinimg.com/564x/5d/a4/f5/5da4f5b4e1d7edc3af20ec3287c76b1e.jpg",
             facebook: "https://web.facebook.com/pattanan.eksakul",
             instagram: "https://instagram.com/mindptnie?igshid=NjZiMGI4OTY=",
             line: "https://line.me/ti/p/uZN1NaC656"
             },
             {                    
             al: "N",
             name: "Nichakan",
             birthday: "7 March 2004",
             study: "6510450364",
             image: "https://i.pinimg.com/564x/38/d3/0c/38d30c3a9a05d6a9d28a38a1fe9fd927.jpg",
             facebook: "https://web.facebook.com/nuplang.ka",
             instagram: "https://instagram.com/tjsdl_s?igshid=YmMyMTA2M2Y=",
             line:"https://line.me/ti/p/vsmxNsIZN8"

             },
        
        ]
          
        }
    },
    components: {
       profileCard
    }
 }
</script>
