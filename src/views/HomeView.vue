<style>
@import url('https://fonts.googleapis.com/css2?family=Calistoga&family=Concert+One&family=Mali:wght@300&display=swap');

h1 {
  font-size: 30px;
  
}

button {
  width: 50px;
  
  padding: 10px 15px;
  margin: 20px 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-image: url(https://i.pinimg.com/564x/12/02/80/120280cc6734fe2747723d78d73aa534.jpg) ;
}
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 400px;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 6px;
  padding: 10px ;
  left: 110%;
  box-shadow: 5px 10px;


  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
.mark1 { 
  background-color: black;
  color:rgb(246, 196, 143)
  
}


button:hover {
    color:blue;
}
</style>

<template>

  
 <body class=" bg-no-repeat bg-fixed bg-cover bg-center" style="background-image: url(https://i.pinimg.com/originals/5d/e5/66/5de5661c1a0f1e5f20efd09da203028d.gif)">

   
<nav class="bg-no-repeat bg-cover fixed top-0 left-0 z-20 p-4 w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-800" style="background-image: url(https://i.pinimg.com/originals/5c/47/ca/5c47ca4ce84e7b9dccf6ad246db9519e.gif)">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <div class="flex items-center">
        <img src="https://i.giphy.com/media/xd22iKsu0Wn0Q/giphy.webp" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap text-white">FESTHAIVAL</span>
    </div>
   
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <router-link to="/"
            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
             Home
          </router-link>
        </li>
        <li>
          <router-link to="/login"
            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Login
          </router-link>
          
          
        </li>
        <li>
          <router-link to="/register"
            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
             Register
          </router-link>
          
        </li>
        <li>
          <router-link to="/addfes" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Add Festival</router-link>
        </li>
        <li>
          <router-link to="/planner" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Planner</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>


    <div class="flex justify-center items-center min-h-screen">
    <div class=" w-1/2 px-7 py-24 backdrop-blur-sm bg-blue-400/50 rounded-lg outline-white ">

    <p class="text-3xl text-white ">TIMELINE</p>

  
  
    <ol class="relative border-l border-gray-200 "> 
                       
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 "></div>
        <mark class="mark1"><time class="mb-1 font-normal leading-none  " >January 2023</time></mark> <br>
        <div v-for="Festival in Festivals" :key="Festival.id">
        <div v-if="Festival.dt_startDate.toDate().getMonth()+1==1">
        
        
        <br>
        <br>
        <div class=" px-3 mr-9 backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
          <time class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
        <h3 class="text-lg text-white">{{Festival.festivalNames}}</h3>
        
        <div class="tooltip text-sky-300 hover:text-sky-600"> > location
          <span class="tooltiptext">
            <p class="word-break: break-all">{{Festival.location}}</p>
          </span>
        </div>
        </div>
        </div>
        </div>

        <br>

    
          
        
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 "></div>
        <mark class="mark1"><time class="mb-1 font-normal leading-none  ">February 2023</time></mark> <br>
      <div v-for="Festival in Festivals" :key="Festival.id">
        <div v-if="Festival.dt_startDate.toDate().getMonth()+1==2">
      
      
          <br>
          <br>
          <div class=" px-3 mr-9 backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
            <time class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
            <h3 class="text-lg text-white">{{Festival.festivalNames}}</h3>
      
            <div class="tooltip text-sky-300 hover:text-sky-600"> > location
              <span class="tooltiptext">
                <p class="word-break: break-all">{{Festival.location}}</p>
              </span>
            </div>
          </div>
        </div>
        </div>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 "></div>
        <mark class="mark1"><time class="mb-1 font-normal leading-none  ">March 2023</time></mark> <br>
        <div v-for="Festival in Festivals" :key="Festival.id">
          <div v-if="Festival.dt_startDate.toDate().getMonth()+1==3">
        
        
            <br>
            <br>
            <div class=" px-3 mr-9  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
              <time class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
              <h3 class="text-lg text-white">{{Festival.festivalNames}}</h3>
        
              <div class="tooltip text-sky-300 hover:text-sky-600"> > location
                <span class="tooltiptext">
                  <p class="word-break: break-all">{{Festival.location}}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 "></div>
        <mark class="mark1"><time class="mb-1 font-normal leading-none  ">April 2023</time></mark> <br>
        <div v-for="Festival in Festivals" :key="Festival.id">
          <div v-if="Festival.dt_startDate.toDate().getMonth()+1==4">
        
        
            <br>
            <br>
            <div class=" px-3 mr-9 backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
              <time class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
              <h3 class="text-lg text-white">{{Festival.festivalNames}}</h3>
        
              <div class="tooltip text-sky-300 hover:text-sky-600"> > location
                <span class="tooltiptext">
                  <p class="word-break: break-all">{{Festival.location}}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 "></div>
        <mark class="mark1"><time class="mb-1 font-normal leading-none  ">May 2023</time></mark> <br>
        <div v-for="Festival in Festivals" :key="Festival.id">
          <div v-if="Festival.dt_startDate.toDate().getMonth()+1==5">
        
        
            <br>
            <br>
            <div class=" px-3 mr-9  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl ">
              <time class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
              <h3 class="text-lg text-white">{{Festival.festivalNames}}</h3>
        
              <div class="tooltip text-sky-300 hover:text-sky-600"> > location
                <span class="tooltiptext">
                  <p class="word-break: break-all">{{Festival.location}}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 "></div>
        <mark class="mark1"><time class="mb-1 font-normal leading-none  ">June 2023</time></mark> <br>
        <div v-for="Festival in Festivals" :key="Festival.id">
          <div v-if="Festival.dt_startDate.toDate().getMonth()+1==6">
        
        
            <br>
            <br>
            <div class=" px-3 mr-9  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
              <time class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
              <h3 class="text-lg text-white">{{Festival.festivalNames}}</h3>
        
              <div class="tooltip text-sky-300 hover:text-sky-600"> > location
                <span class="tooltiptext">
                  <p class="word-break: break-all">{{Festival.location}}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 "></div>
        <mark class="mark1"><time class="mb-1 font-normal leading-none  ">July 2023</time></mark> <br>
        <div v-for="Festival in Festivals" :key="Festival.id">
          <div v-if="Festival.dt_startDate.toDate().getMonth()+1==7">
        
        
            <br>
            <br>
            <div class=" px-3 mr-9  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
              <time class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
              <h3 class="text-lg text-white">{{Festival.festivalNames}}</h3>
        
              <div class="tooltip text-sky-300 hover:text-sky-600"> > location
                <span class="tooltiptext">
                  <p class="word-break: break-all">{{Festival.location}}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 "></div>
        <mark class="mark1"><time class="mb-1 font-normal leading-none  ">August 2023</time></mark> <br>
        <div v-for="Festival in Festivals" :key="Festival.id">
          <div v-if="Festival.dt_startDate.toDate().getMonth()+1==8">
        
        
            <br>
            <br>
            <div class=" px-3 mr-9 backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
              <time class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
              <h3 class="text-lg text-white">{{Festival.festivalNames}}</h3>
        
              <div class="tooltip text-sky-300 hover:text-sky-600"> > location
                <span class="tooltiptext">
                  <p class="word-break: break-all">{{Festival.location}}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 "></div>
        <mark class="mark1"><time class="mb-1 font-normal leading-none  ">September 2023</time></mark> <br>
        <div v-for="Festival in Festivals" :key="Festival.id">
          <div v-if="Festival.dt_startDate.toDate().getMonth()+1==9">
        
        
            <br>
            <br>
            <div class=" px-3 mr-9  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
              <time class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
              <h3 class="text-lg text-white">{{Festival.festivalNames}}</h3>
        
              <div class="tooltip text-sky-300 hover:text-sky-600"> > location
                <span class="tooltiptext">
                  <p class="word-break: break-all">{{Festival.location}}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 "></div>
        <mark class="mark1"><time class="mb-1 font-normal leading-none  ">October 2023</time></mark> <br>
        <div v-for="Festival in Festivals" :key="Festival.id">
          <div v-if="Festival.dt_startDate.toDate().getMonth()+1==10">
        
        
            <br>
            <br>
            <div class=" px-3 mr-9  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
              <time class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
              <h3 class="text-lg text-white">{{Festival.festivalNames}}</h3>
        
              <div class="tooltip text-sky-300 hover:text-sky-600"> > location
                <span class="tooltiptext">
                  <p class="word-break: break-all">{{Festival.location}}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 "></div>
        <mark class="mark1"><time class="mb-1 font-normal leading-none  ">November 2023</time></mark> <br>
      <div v-for="Festival in Festivals" :key="Festival.id">
        <div v-if="Festival.dt_startDate.toDate().getMonth()+1==11">
      
      
          <br>
          <br>
          <div class=" px-3 mr-9  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
            <time class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
            <h3 class="text-lg text-white">{{Festival.festivalNames}}</h3>
      
            <div class="tooltip text-sky-300 hover:text-sky-600"> > location
              <span class="tooltiptext">
                <p class="word-break: break-all">{{Festival.location}}</p>
              </span>
            </div>
          </div>
        </div>
       

        </div>
        

    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 "></div>
        <mark class="mark1"><time class="mb-1 font-normal leading-none  ">December 2023</time></mark> <br>
        <div v-for="Festival in Festivals" :key="Festival.id">
          <div v-if="Festival.dt_startDate.toDate().getMonth()+1==12">
        
        
            <br>
            <br>
            <div class=" px-3 mr-9  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
              <time class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
              <h3 class="text-lg text-white">{{Festival.festivalNames}}</h3>
        
              <div class="tooltip text-sky-300 hover:text-sky-600"> > location
                <span class="tooltiptext">
                  <p class="word-break: break-all">{{Festival.location}}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
    </li>
    
    
    </ol>
 </div> 

 </div>
 



  <a id="jumpHere"></a>

 
 <p>
  .<br>
  .<br>
  .<br>
  
 </p>


 

<footer class="fixed bottom-0 left-0 z-20 p-4 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600" >
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 FESTHAIVAL™ All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <button @click="$store.dispatch('logout')">Logout</button>
  
            
        
        
      
    </ul>
</footer>



 </body>



 




</template>


<!-- <script src="../node_modules/flowbite/dist/flowbite.js">

</script> -->



<script>
import { usefesStore } from "../storePinia/fes";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import moment from 'moment';
// import { timeStamp } from "console";
export default {
  name: "HomeView",
  data() {
    return {
      Festivals: [],
      coordinates: '',
      dt_startDate: '',


    };
  },
  async mounted() {
    await usefesStore().fetchData();
    this.Festivals = usefesStore().getfes;
    console.log('test')
    console.log(this.Festivals)

    const sortedArray = this.Festivals.sort((a, b) => new moment(a.startDate).format('YYYYMMDD') - new moment(b.startDate).format('YYYYMMDD'))
    console.log(sortedArray);
    console.log(this.Festivals);


    // var startD = 
    // console.log(moment(startDate));

  }
  , methods() {

  }


}

// import { PhHorse, PhHeart, PhCube } from "phosphor-vue";
// export default {
//   name: "App",
//   components: {
//     PhHorse,
//     PhHeart,
//     PhCube,
//   },
// };
// set the tooltip content element
const targetEl = document.getElementById('tooltipContent');

// set the element that trigger the tooltip using hover or click
const triggerEl = document.getElementById('tooltipButton');

// options with default values
const options = {
  placement: 'bottom',
  triggerType: 'hover',
  onHide: () => {
      console.log('tooltip is shown');
  },
  onShow: () => {
      console.log('tooltip is hidden');
  }
};



</script>

