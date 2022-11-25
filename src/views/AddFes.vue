<style>
label {
  width: 100px;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-image: url(https://i.pinimg.com/originals/f7/79/02/f779022bf18922eeeaa38337c1238577.gif);
}
input[type=submit]{
  position:center;
  
}

input[type=submit]:hover {
  background-image: url(https://i.pinimg.com/originals/30/2b/2d/302b2dd0bdf83c760e7d285ac708467a.gif);
}
</style>
<template>
<body class=" bg-no-repeat  bg-cover bg-center min-h-screen"
  style="background-image: url(https://i.pinimg.com/originals/1b/91/36/1b91362b2fca378c280ec3ae246d13c3.gif)">

  <nav
    class="bg-no-repeat bg-center bg-cover fixed top-0 left-0 z-20 p-4 w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-800"
    style="background-image: url(https://i.pinimg.com/originals/ec/f6/45/ecf645fe3678b8d7fd67e4654b9af5c6.gif)">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <div class="flex items-center">
        <img src="https://media.giphy.com/media/1wpxG15ZRRwUo94ytP/giphy.gif
" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap text-white">FESTHAIVAL</span>
        
      </div>
  
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <router-link to="/"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <font-awesome-icon icon="fa-solid fa-right-to-bracket" /> Home
            </router-link>
          </li>
          <li>
            <router-link to="/login"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <font-awesome-icon icon="fa-solid fa-right-to-bracket" /> Login
            </router-link>
  
  
          </li>
          <li>
            <router-link to="/register"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <font-awesome-icon icon="fa-solid fa-registered" /> Register
            </router-link>
  
          </li>
          <li>
            <router-link to="/addfes"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <font-awesome-icon icon="fa-solid fa-circle-plus" /> Add Festival
            </router-link>
          </li>
          <li>
            <router-link to="/planner"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <font-awesome-icon icon="fa-solid fa-pen" /> Planner
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

<br>
<br>
<br>
<br><br>

<div class="flex justify-center">
<div class=" px-3 backdrop-blur-sm bg-gray-800/40 rounded-lg outline outline-offset-2 outline-white  ">
  <br>
<p class=" bg-clip-text text-white text-2xl text-center">
  ADD FESTIVALS
</p>
<br>



  
    
 

  
  <div class="flex justify-center items-center ">
    
  
  <form class="mb-15" v-on:submit.prevent="createFestival" >
  
    <label for="festivalName">Festival Name </label>
   
    <input type="text" id="festivalName" name="festivalName" v-model="festivalName"><br><br>


    
    
  <label for="startDate">Start Date: </label>
  <!-- <div>Date: {{ date }}</div> -->
  <input type="date" v-model="startDate" required><br><br>
  <label for="endDate">End Date: </label>
  <input type="date" v-model="endDate" required><br><br>

    <label for="location">Location: </label>
    <input type="text" id="location" name="location" v-model="location" required><br><br>
    
    <label for="longitude">Longtitude: </label>
    <!-- <div>Longitude: {{ number }}</div> -->
    <input type="text" id="longtitude" name="longtitude" v-model="longtitude" required><br><br>
    
    <label for="latitude">Latitude: </label>
    <!-- <div>Latitude: {{ number }}</div> -->
    <input type="text" id="latitude" name="laitude" v-model="latitude" required><br><br>



    <label>
    <div class="text-center flex justify-center items-center ">
    <input type="submit" value="Submit" v-on:click="playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')">
    </div>
    </label>

  

    
  </form>
 </div>
 </div>
</div>

<footer
  class="fixed bottom-0 left-0 z-20 p-4 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
  <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 FESTHAIVAL™ All Rights Reserved.
  </span>
  
  
</footer>

 </body>
</template>

<script>
  import {doc, addDoc, collection, GeoPoint} from "firebase/firestore"
  import {db} from '../firebase/index.js'
// import {ref, onMounted} from 'vue';
  import {ref, onMounted} from 'vue';
  import {FirebaseError} from '@firebase/util';
// import moment from 'moment';
// import {domainToASCII} from "url";
export default {
  data() {
    return {
      festivalNames: '',
      startDate: '',
      endDate: '',
      location: '',
      longtitude: '',
      latitude: '',
      coordinate: '',
      dt_startDate: '',
      dt_endDate:''
      
    }
  },
  
  methods: {
    async createFestival() {
      this.coordinate = new GeoPoint(this.latitude, this.longtitude)
      this.dt_startDate = new Date(this.startDate)
      this.dt_endDate = new Date(this.endDate)
      await addDoc(collection(db, 'Festivals'), {
        dt_startDate: this.dt_startDate,
        dt_endDate: this.dt_endDate,
        festivalNames: this.festivalName,
        startDate: this.startDate,
        endDate: this.endDate,
        location: this.location,
        coordinates: this.coordinate,
      })
      console.log(this.coordinate)

      this.clearForm()
    },
    clearForm() {
      this.festivalName = ""
      this.startDate = ""
      this.endDate = ""
      this.location = ""
      this.latitude = ""
      this.longtitude = ""
    },
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    compareDate() {
      
    }

  }
}


</script>

<style>

</style>