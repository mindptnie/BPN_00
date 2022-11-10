<template>
    <body>

        <div class="flex items-center shadow-md rounded box-content w-1/4 p-4 border-4 bg-purple-200 transition duration-500 hover:bd-stone-800 ...">

        <div class="rounded-full w-40 h-40 bg-cover" :style="getUrlImage(image)"></div>
        <div class="box-decoration-slice bg-gradient-to-r from-sky-300 to-pink-200 text-white px-2 ...">{{al}}</div>
        <div class="text-sky-400 text-center">{{name}}</div>
        <div class="text-white text-center">{{birthday}}</div>
        <div class="text-white text-center">{{study}}</div>

        <font-awesome-icon icon="fa-brands fa-square-facebook" class="text-pink-300" />


        </div>

  
    </body>
</template>

<script>
export default {
   props: {
    name:{
       type: String,
       default: "Phattanan",
    },
    birthday: {
       type: String,
       default: "7 July 2004",
    },
    image:{
       type: String,
       default: "/assets/images/mind.jpeg",
    },
    study: {
       type: String,
       default: "study at KU",
    },
    al: {
       type: String,
       default: "P",
    },
    methods: {
        getUrlImage(imagePath)
        {
            return{ 'background-image': 'url("./src/' + imagePath + '")'};
        },

    }
   }
};
</script>
