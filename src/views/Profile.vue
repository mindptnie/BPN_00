<template>
    <button class="bg-pink-200 m-3 p-3 hover:bg-sky-200">
    <RouterLink to="/">Home</RouterLink>
    </button>

    <div class="flex flex-row">
        <profileCard v-for="member in members" :key="member" class="w-1/3"
          :al="member.al"
          :name="member.name"
          :birthday="member.birthday"
          :study="member.study"
          image="member.image">

        </profileCard>
              
    </div>


 
</template>
<script>
import profileCard from "../components/Profile.vue";
export default {
   data() {
        return {
             members: [
             {                    
             al: "B",
             name: "Bhanujaya",
             birthday: "8 January 2004",
             study: "study at KU",
             image: "/assets/images/cream.jpg"

             },
             {
             al: "P",
             name: "Phattanan",
             birthday: "7 July 2004",
             study: "study at KU",
             image: "/assets/images/mind.jpeg"
             },
             {                    
             al: "N",
             name: "Nichakan",
             birthday: "7 March 2004",
             study: "study at KU",
             image: "/assets/images/pleang.jpg"

             },
        
        ]
          
        }
    },
    components: {
       profileCard
    }
 }
</script>
