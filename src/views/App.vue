<template>
  <div class="flex h-screen">
    <SideMenu class="flex-shrink-0" />
    <router-view
      class="flex-1 overflow-x-hidden overflow-y-scroll"
    ></router-view>
  </div>
</template>

<script>
import SideMenu from "../components/SideMenu.vue";
export default {
  components: { SideMenu },
};
</script>

<style></style>
