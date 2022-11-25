import {defineStore} from "pinia";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";


export const usefesStore = defineStore('Festivals', {
    state: () => ({
        Festivals: []
    }),
    getters: {
        getfes: (state) => {
            return state.Festivals
        }
    },
    actions: {
        async fetchData() {
            // const queryData = await getDocs(collection(db,"Festivals", orderBy("dt_startDate")));
            // const queryData = await query(Festivals, orderBy("dt_startDate"))
            // const queryData = await db.collection().orderBy("dt_startDate", Query.Direction.DESCENDING);
            const queryData = await getDocs(collection(db, "Festivals"));
            // console.log(queryData.docs)
            this.Festivals = queryData.docs.map((doc) => {
                // console.log(doc.data.toString);
                // console.log(doc.id, " => ", doc.data()['location']);
                return doc.data()
            });
            console.log(this.Festivals);
             

            
           
    
        },
    }})