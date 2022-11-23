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
      <router-link to="/app/dashboard" class="text-gray-200 block my-5">
        <font-awesome-icon icon="th-large" class="lg:mr-5" />
        <span class="hidden lg:inline">Dashboard</span>
      </router-link>
      <router-link to="/app/customers" class="text-gray-200 block my-5">
        <font-awesome-icon icon="users" class="lg:mr-5" />
        <span class="hidden lg:inline">Customers</span>
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
