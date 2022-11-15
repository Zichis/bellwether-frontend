<template>
  <div class="flex min-h-screen">
    <SideMenu />
    <router-view class="flex-1"></router-view>
  </div>
</template>

<script>
import SideMenu from "../components/SideMenu.vue";
export default {
  components: { SideMenu },
};
</script>

<style></style>
