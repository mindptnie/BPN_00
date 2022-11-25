

<template>

  <body class=" bg-no-repeat bg-fixed bg-cover bg-center"
    style="background-image: url(https://i.pinimg.com/originals/5d/e5/66/5de5661c1a0f1e5f20efd09da203028d.gif)">
  
  
    <nav
      class="bg-no-repeat bg-cover fixed top-0 left-0 z-20 p-4 w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-800"
      style="background-image: url(https://i.pinimg.com/originals/5c/47/ca/5c47ca4ce84e7b9dccf6ad246db9519e.gif)">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <div class="flex items-center">
          <img src="https://i.giphy.com/media/xd22iKsu0Wn0Q/giphy.webp" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap text-white">FESTHAIVAL</span>
        </div>
  
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
              <router-link to="/addfes"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                 Add Festival
              </router-link>
            </li>
            <li>
              <router-link to="/planner"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                 Planner
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

   <br><br><br><br><br>
  
    <form class="text-center" v-on:submit.prevent="checkIfDateIsBetweenRange">
      <label for="startDate">StartDate: </label>
      <input type="date" v-model="startUser" required><br><br>
      <label for="endDate">End Date: </label>
      <input type="date" v-model="endUser" required><br><br>
      <input type="submit" value="Submit">

    </form>

<div class="flex flex-col justify-center items-center min-h-screen">

  <div class=" w-1/2 px-9 py-20 backdrop-blur-sm bg-blue-400/60 rounded-lg ">

    <p class="text-3xl text-white ">TIMELINE</p>



    <ol class="relative border-l border-gray-200 ">
      <div v-if="startUser==''">
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
          </div>
          
          <mark class="mark1"><time class="mb-1 font-normal leading-none  ">January 2023</time></mark> <br>
          <div v-for="Festival in Festivals" :key="Festival.id">
            <div v-if="Festival.dt_startDate.toDate().getMonth()+1==1">


              <br>
              <br>
              <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                <time
                  class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
          </div>
          <mark class="mark1"><time class="mb-1 font-normal leading-none  ">February 2023</time></mark> <br>
          <div v-for="Festival in Festivals" :key="Festival.id">
            <div v-if="Festival.dt_startDate.toDate().getMonth()+1==2">


              <br>
              <br>
              <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                <time
                  class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
          </div>
          <mark class="mark1"><time class="mb-1 font-normal leading-none  ">March 2023</time></mark> <br>
          <div v-for="Festival in Festivals" :key="Festival.id">
            <div v-if="Festival.dt_startDate.toDate().getMonth()+1==3">


              <br>
              <br>
              <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                <time
                  class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
          </div>
          <mark class="mark1"><time class="mb-1 font-normal leading-none  ">April 2023</time></mark> <br>
          <div v-for="Festival in Festivals" :key="Festival.id">
            <div v-if="Festival.dt_startDate.toDate().getMonth()+1==4">


              <br>
              <br>
              <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                <time
                  class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
          </div>
          <mark class="mark1"><time class="mb-1 font-normal leading-none  ">May 2023</time></mark> <br>
          <div v-for="Festival in Festivals" :key="Festival.id">
            <div v-if="Festival.dt_startDate.toDate().getMonth()+1==5">


              <br>
              <br>
              <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                <time
                  class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
          </div>
          <mark class="mark1"><time class="mb-1 font-normal leading-none  ">June 2023</time></mark> <br>
          <div v-for="Festival in Festivals" :key="Festival.id">
            <div v-if="Festival.dt_startDate.toDate().getMonth()+1==6">


              <br>
              <br>
              <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                <time
                  class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
          </div>
          <mark class="mark1"><time class="mb-1 font-normal leading-none  ">July 2023</time></mark> <br>
          <div v-for="Festival in Festivals" :key="Festival.id">
            <div v-if="Festival.dt_startDate.toDate().getMonth()+1==7">


              <br>
              <br>
              <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                <time
                  class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
          </div>
          <mark class="mark1"><time class="mb-1 font-normal leading-none  ">August 2023</time></mark> <br>
          <div v-for="Festival in Festivals" :key="Festival.id">
            <div v-if="Festival.dt_startDate.toDate().getMonth()+1==8">


              <br>
              <br>
              <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                <time
                  class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
          </div>
          <mark class="mark1"><time class="mb-1 font-normal leading-none  ">September 2023</time></mark> <br>
          <div v-for="Festival in Festivals" :key="Festival.id">
            <div v-if="Festival.dt_startDate.toDate().getMonth()+1==9">


              <br>
              <br>
              <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                <time
                  class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
          </div>
          <mark class="mark1"><time class="mb-1 font-normal leading-none  ">October 2023</time></mark> <br>
          <div v-for="Festival in Festivals" :key="Festival.id">
            <div v-if="Festival.dt_startDate.toDate().getMonth()+1==10">


              <br>
              <br>
              <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                <time
                  class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
          </div>
          <mark class="mark1"><time class="mb-1 font-normal leading-none  ">November 2023</time></mark> <br>
          <div v-for="Festival in Festivals" :key="Festival.id">
            <div v-if="Festival.dt_startDate.toDate().getMonth()+1==11">


              <br>
              <br>
              <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                <time
                  class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
          </div>
          <mark class="mark1"><time class="mb-1 font-normal leading-none  ">December 2023</time></mark> <br>
          <div v-for="Festival in Festivals" :key="Festival.id">
            <div v-if="Festival.dt_startDate.toDate().getMonth()+1==12">


              <br>
              <br>
              <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                <time
                  class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
      </div>
      <div v-else>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
            </div>
          
            <mark class="mark1"><time class="mb-1 font-normal leading-none  ">January 2023</time></mark> <br>
            <div v-for="Festival in searched_festival" :key="Festival.id">
              <div v-if="Festival.dt_startDate.toDate().getMonth()+1==1">
          
          
                <br>
                <br>
                <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                  <time
                    class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
            </div>
            <mark class="mark1"><time class="mb-1 font-normal leading-none  ">February 2023</time></mark> <br>
            <div v-for="Festival in searched_festival" :key="Festival.id">
              <div v-if="Festival.dt_startDate.toDate().getMonth()+1==2">
          
          
                <br>
                <br>
                <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                  <time
                    class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
            </div>
            <mark class="mark1"><time class="mb-1 font-normal leading-none  ">March 2023</time></mark> <br>
            <div v-for="Festival in searched_festival" :key="Festival.id">
              <div v-if="Festival.dt_startDate.toDate().getMonth()+1==3">
          
          
                <br>
                <br>
                <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                  <time
                    class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
            </div>
            <mark class="mark1"><time class="mb-1 font-normal leading-none  ">April 2023</time></mark> <br>
            <div v-for="Festival in searched_festival" :key="Festival.id">
              <div v-if="Festival.dt_startDate.toDate().getMonth()+1==4">
          
          
                <br>
                <br>
                <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                  <time
                    class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
            </div>
            <mark class="mark1"><time class="mb-1 font-normal leading-none  ">May 2023</time></mark> <br>
            <div v-for="Festival in searched_festival" :key="Festival.id">
              <div v-if="Festival.dt_startDate.toDate().getMonth()+1==5">
          
          
                <br>
                <br>
                <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                  <time
                    class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
            </div>
            <mark class="mark1"><time class="mb-1 font-normal leading-none  ">June 2023</time></mark> <br>
            <div v-for="Festival in searched_festival" :key="Festival.id">
              <div v-if="Festival.dt_startDate.toDate().getMonth()+1==6">
          
          
                <br>
                <br>
                <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                  <time
                    class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
            </div>
            <mark class="mark1"><time class="mb-1 font-normal leading-none  ">July 2023</time></mark> <br>
            <div v-for="Festival in searched_festival" :key="Festival.id">
              <div v-if="Festival.dt_startDate.toDate().getMonth()+1==7">
          
          
                <br>
                <br>
                <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                  <time
                    class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
            </div>
            <mark class="mark1"><time class="mb-1 font-normal leading-none  ">August 2023</time></mark> <br>
            <div v-for="Festival in searched_festival" :key="Festival.id">
              <div v-if="Festival.dt_startDate.toDate().getMonth()+1==8">
          
          
                <br>
                <br>
                <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                  <time
                    class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
            </div>
            <mark class="mark1"><time class="mb-1 font-normal leading-none  ">September 2023</time></mark> <br>
            <div v-for="Festival in searched_festival" :key="Festival.id">
              <div v-if="Festival.dt_startDate.toDate().getMonth()+1==9">
          
          
                <br>
                <br>
                <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                  <time
                    class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
            </div>
            <mark class="mark1"><time class="mb-1 font-normal leading-none  ">October 2023</time></mark> <br>
            <div v-for="Festival in searched_festival" :key="Festival.id">
              <div v-if="Festival.dt_startDate.toDate().getMonth()+1==10">
          
          
                <br>
                <br>
                <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                  <time
                    class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
            </div>
            <mark class="mark1"><time class="mb-1 font-normal leading-none  ">November 2023</time></mark> <br>
            <div v-for="Festival in searched_festival" :key="Festival.id">
              <div v-if="Festival.dt_startDate.toDate().getMonth()+1==11">
          
          
                <br>
                <br>
                <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                  <time
                    class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
            </div>
            <mark class="mark1"><time class="mb-1 font-normal leading-none  ">December 2023</time></mark> <br>
            <div v-for="Festival in searched_festival" :key="Festival.id">
              <div v-if="Festival.dt_startDate.toDate().getMonth()+1==12">
          
          
                <br>
                <br>
                <div class=" px-3  backdrop-blur-sm bg-blue-900/60 rounded-lg shadow-xl">
                  <time
                    class="mb-1 font-normal leading-none text-yellow-300">({{Festival.startDate}})-({{Festival.endDate}})</time>
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
      </div>
    </ol>
  </div>
  <!-- <GoogleMap api-key="AIzaSyC0qZgYQi-BU425PNVPzhLQwJt_VIoBfXg" style="width: 90%; height: 500px ; padding: 2rem;" :center="center"
    :zoom="6">
    <Polyline :options="newDestination" />
    <MarkerCluster>
      <Marker v-for="(location, i) in locations" :options="{ position: location }" :key="i" />
    </MarkerCluster>
  </GoogleMap> -->

</div>

 


  </body>

</template>


<script>
import { defineComponent } from "vue"; 
import { GoogleMap, Polyline, Marker, MarkerCluster  } from "vue3-google-map";
import { doc, addDoc, collection } from "firebase/firestore"
import { db } from '../firebase/index'
import { usefesStore } from "../storePinia/fes";
import moment from 'moment';


export default defineComponent({
  name: "app",
  components: { GoogleMap, Polyline, Marker, MarkerCluster },
  setup() {
    const center = { lat: 13.74994, lng: 100.64208 };


    const flightPlanCoordinates = [
      { lat: 18.796143, lng: 98.979263 },
      { lat: 14.882973, lng: 103.493355 },
      { lat: 7.878978, lng: 98.398392 },
      { lat: 13.74994, lng: 100.53148 },
    ];
    const flightPath = {
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    };
    

    return { center, flightPath };
  },
    data() {
        return {
            Festivals: [],
            startUser: '',
            endUser: '',
            searched_festival: [],
            markers: [
              {
                  
                    position: {
                        lat: 51.093048, lng: 6.842120
                    },
              }],
          locations: [],
          destination: {
            path: [],
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2,
            editable:"true"
          }


        };
  },
  computed: {
    newDestination: function () { 
      return this.destination
    }
  },
//   watch: {
//     destination(newDestination, oldDestination) { 
//       console.log("destination" + newDestination);
// console.log('-------------');
//       console.log("destination" + oldDestination);
//     }
//   },
     async mounted() {
        await usefesStore().fetchData();
        this.Festivals =  usefesStore().getfes;
        const sortedArray = this.Festivals.sort((a, b) => new moment(a.startDate).format('YYYYMMDD') - new moment(b.startDate).format('YYYYMMDD'))


        // this.Festivals.forEach(element => {
        //     if (moment(element.startDate).isBetween(this.startUser, this.endUser)) {
        //         this.searched_festival.push(element)
        //     }

        // });
    },
    methods: {
      checkIfDateIsBetweenRange() {
        this.searched_festival = []
        console.log("this.Festivals", this.Festivals);
        this.searched_festival = this.Festivals.filter((festival) => {
          if (moment(festival.startDate).isBetween(this.startUser, this.endUser))
            return festival
        })

        // Mapping the data to _lat and _long
        this.locations = this.searched_festival.map((festival) => (({
            "lat": festival.coordinates._lat,
            "lng": festival.coordinates._long,
        })))
        // this.locations = [
        //   { lat: 18.796143, lng: 98.979263 },
        //   { lat: 14.882973, lng: 103.493355 },
        //   { lat: 7.878978, lng: 98.398392 },
        //   { lat: 13.74994, lng: 100.53148 },
        // ]
        

        // let tmp =[
        //   { lat: 18.796143, lng: 98.979263 },
        //   { lat: 14.882973, lng: 103.493355 },
        //   { lat: 7.878978, lng: 98.398392 },
        //   { lat: 13.74994, lng: 100.53148 },
        // ]

        // tmp.forEach((t) => this.destination.path.push(t))
        // this.$forceUpdate(...tmp);
        // this.destination.path.push();
        console.log("this.destination", this.destination);
        // console.log("this.searched_festival", this.searched_festival);
        // console.log("coordinateList", coordinateList);
            
        console.log("searched_festival", this.searched_festival)
        },
    }

    // async createData() {
    //     var newData = this.searched_festival
    //     console.log(newData)
    //     await addDoc(collection(db, 'userPick', ), {
    //            newData
    //     })
     

    // }
})

</script>

