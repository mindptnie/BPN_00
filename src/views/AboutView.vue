<template>
  <div>
  
  </div>
</template>



<script>

import { db } from '../firebase/index'

db.collection("Festivals").doc("7sUoUKlcKdZxYUu0bhEi").get().then(doc => {
    console.log(doc.data())
  })

</script>