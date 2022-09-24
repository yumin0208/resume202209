<template>
    <div>
        <img v-for="item in count" :src="imgURL + item">
        <button @click="count += 1">+</button> 
    </div>
</template>
<script>
    export default{
        data(){
            return {
                imgURL:'https://picsum.photos/200/200?random=',
                count:5
            }
        }
    }
</script> 

  