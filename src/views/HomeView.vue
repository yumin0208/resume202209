<template>
  <div class="home">
    <!-- 頁面相關的部分都在view裡做 -->
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="哈囉" title="測試" num="123"/>
    <MainItem
    :info="title"
    :count="parentNum"
    @numadd="numAddOne"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MainItem from '@/components/MainItem.vue'
export default {
  components: {
    HelloWorld,
    MainItem
  },
  data(){
    return{
      title:'money',
      parentNum:0
    }
  },
  methods:{
    numAddOne(val){
      this.parentNum += val
    }
  }
}
</script>
