<template>
    <div class="home">
      <img alt="Vue logo" src="../assets/images/main_logo_row.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <ActivityIsland/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HelloWorld from "@/components/HelloWorld.vue";
  import ActivityIsland from "@/components/ActivityIsland.vue";
  
  export default {
    name: "HomeView",
    components: {
      HelloWorld,
      ActivityIsland,
  
    },
  };
  </script>