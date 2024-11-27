<template>
  <div class="wrapper">
    <nav-bar-component v-if="sizeX >= 576" />
    <mobile-nav-bar-component v-else />
    <router-view></router-view>
  </div>
</template>

<script>
import MainPage from '@/views/MainPage.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import MobileNavBarComponent from '@/components/MobileNavBarComponent.vue';

export default {
  components: { MainPage, NavBarComponent, MobileNavBarComponent },
  data() {
    return {
      sizeX: document.documentElement.clientWidth,
    };
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.sizeX = document.documentElement.clientWidth;
    });
  },
};
</script>

<style></style>
