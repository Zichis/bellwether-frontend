<template>
  <div>
    <div class="flex min-h-screen">
      <div
        class="hidden md:p-5 lg:p-10 md:block md:w-1/3"
        style="background-image: linear-gradient(rgba(31,50,77,0.9),rgba(31,50,77,1)), url('https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80')"
      >
        <h2 class="font-extrabold text-2xl text-yellow-50">BELLWETHER</h2>
        <div class="flex justify-center items-center h-full">
          <div>
            <h3 class="text-4xl text-white font-light mb-5">
              Manage waste efficiently with our features
            </h3>
            <ul class="pl-5">
              <li class="text-2xl mb-4 animate-1">
                <font-awesome-icon
                  icon="check-circle"
                  class="text-green-400 mr-2"
                ></font-awesome-icon>
                <span class="font-extralight text-white">
                  Monitor waste status on your dashboard
                </span>
              </li>
              <li class="text-2xl mb-4 animate-2">
                <font-awesome-icon
                  icon="check-circle"
                  class="text-green-400 mr-2"
                ></font-awesome-icon>
                <span class="font-extralight text-white">
                  Manage payment history
                </span>
              </li>
              <li class="text-2xl mb-4 animate-3">
                <font-awesome-icon
                  icon="check-circle"
                  class="text-green-400 mr-2"
                ></font-awesome-icon>
                <span class="font-extralight text-white">
                  Make payments efficiently
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
