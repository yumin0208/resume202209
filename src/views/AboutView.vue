<template>
  <div class="home">
    <h1>Home Page</h1>
    <div class="box" ref="box">Home</div>
    <p>
      <router-link to="/about">About Page</router-link>
    </p>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

export default {
  name: "Home",
  setup() {
    const box = ref();
    onMounted(() => {
      gsap.to(box.value, { rotation: "+=360" });
    });

    return {
      box,
    };
  },
};
</script>



