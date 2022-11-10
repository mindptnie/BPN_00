<template>
    <div>
        <button @click="count++">Add1</button>
        <div>Count is {{count}}</div>'
        
        <button class="p-2 bg-pink-200" @click="dropdown=!dropdown">menu</button>
        <div class="rounded-Ig bg-sky-200 animate-fadeIn" v-if="dropdown"> This is dropdown </div>

        <div>this is onchange</div>
        <input class="p-2 border-2" type="text" @change="count++">
        <div>
            count is {{count}}
        </div>
        <div>this is v-model</div>
        <input v-model="name">
        <div>{{name}}</div>
    </div>
   
</template>
<script>
export default {
    data()
    {
        return{
            count: 0,
            dropdown : false,
            name: "Phattanan"
        }
    }
}
</script>
