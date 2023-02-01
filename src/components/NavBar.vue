<template lang="">
  <div>
    <nav
      class="fixed z-50 flex flex-wrap items-center py-2 justify-between w-full md:py-0 px-4 text-lg text-gray-700 bg-white"
    >
      <router-link to="/">
        <img
          class="h-7"
          src="../assets/bellwether.jpeg"
          alt="bellwether_logo"
        />
      </router-link>
      <button class="px-3 shadow md:hidden block border rounded" @click="toggleMenu">
        <font-awesome-icon icon="bars" />
      </button>
      <div class="w-full md:flex md:items-center md:w-auto" id="menu" :class="{ hidden: isHidden }">
        <ul
          class="text-base text-gray-700 pt-4 md:flex md:justify-between md:pt-0"
        >
          <li>
            <router-link to="/" class="md:p-4 py-2 block hover:text-red-400"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              class="md:p-4 py-2 block hover:text-red-400"
              >About</router-link
            >
          </li>
          <li>
            <router-link to="/services" class="md:p-4 py-2 block hover:text-red-400"
              >Services</router-link
            >
          </li>
          <li>
            <router-link to="/contact" class="md:p-4 py-2 block hover:text-red-400"
              >Contact Us</router-link
            >
          </li>
          <li>
            <router-link to="/get-started" class="md:p-4 py-2 block text-yellow-600 md:bg-yellow-600 md:text-yellow-200 md:hover:text-white"
              >Register</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
    data() {
        return {
            isHidden: true,
        }
    },
    methods: {
        toggleMenu() {
            this.isHidden = !this.isHidden;
        }
    }
};
</script>
<style>
.router-link-exact-active {
    color: red;
}
</style>
