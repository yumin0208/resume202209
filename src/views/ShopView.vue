
<template>
  <div class="Shop">
    <h1>This is an Shop page</h1>
    <h2>product:{{$route.params.productID}}</h2>
    <ImageItem/>
  </div>
</template>
<script>
    import ImageItem from '@/components/Image.vue'
    export default{
        components: {
            ImageItem
        }
    }
</script>
