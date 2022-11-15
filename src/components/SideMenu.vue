<template>
  <div class="lg:w-64" style="background: #05082c">
    <div class="p-5">
      <img
        class="hidden lg:block"
        src="../assets/bellwether.jpeg"
        alt="bellwether_logo"
      />
    </div>
    <div class="p-5">
      <router-link to="/app/dashboard" class="text-gray-200">
        Dashboard
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
    };
  },

  methods: {},
};
</script>

<style></style>
