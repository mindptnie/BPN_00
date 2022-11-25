

<template>

    <body class="h-screen bg-no-repeat bg-cover bg-center"
        style="background-image: url(https://i.pinimg.com/originals/aa/c0/00/aac000c13b07fc19d355c3bb40ad6a3f.gif)">
        <div class="flex justify-center items-center min-h-screen">

            </div>


            <div class="flex flex-row">
                <profileCard v-for="festive in festives" :key="festive" class="w-1/3" :name="festive.name" :date="festive.date" :info="festive.info" />
                

            </div>

    <div class="flex justify-center items-center min-h-screen">
        <div class=" w-1/2 px-7 py-24 backdrop-blur-sm bg-blue-400/30 rounded-lg animate-fadeIn ">
    
            <h1>TIMELINE</h1>
    
    
    
            <ol class="relative border-l border-gray-200 ">
    
                <li class="mb-10 ml-4">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
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
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
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
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
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
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
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
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
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
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
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
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
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
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
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
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
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
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
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
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
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
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white  dark:bg-pink-300 ">
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
    
    
            </ol>
        </div>
    
    </div>


    </body>




</template>
<script>
import FestCard from "/src/components/FestCard.vue";
export default {
    data() {
        return {
            members: [
                {
                    date: {},
                    name: {},
                    info: {}
                },
                

            ]

        }
    },
    components: {
        FestCard
    }
}
</script>