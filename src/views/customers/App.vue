<template>
  <div class="p-5 bg-gray-100">
    <div class="inline-flex mb-5 shadow-md rounded-md overflow-hidden">
      <router-link
        to="/app/customers"
        class="bg-gray-700 hover:bg-gray-600 text-gray-200 block px-2 py-1 border border-gray-600"
      >
        <font-awesome-icon icon="eye" class="lg:mr-2" />
        <span class="hidden lg:inline font-thin text-sm">VIEW ALL</span>
      </router-link>
      <router-link
        to="/app/customers/add"
        class="bg-gray-700 hover:bg-gray-600 text-gray-200 block px-2 py-1 border border-gray-600"
      >
        <font-awesome-icon icon="user-plus" class="lg:mr-2" />
        <span class="hidden lg:inline font-thin text-sm">ADD NEW</span>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
