<template>
  <!--<div>
    <h1 class="text-red-500">Login</h1>
  </div>-->
  <div
    class="flex-1 bg-gray-50 flex justify-center items-center px-5 md:px-10 h-screen"
  >
    <div class="w-full">
      <header class="px-5 text-gray-700 mb-8">
        <h2 class="text-2xl font-semibold mb-10">Login</h2>
        <h3 class="font-semibold mb-2">Log into your account</h3>
        <p class="font-light">
          Welcome back to Bellwether. Enter your account details to continue
          from where you stopped.
        </p>
      </header>
      <form @submit.prevent="login" class="w-full">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-1/2 px-5 mb-5">
            <label for="email" class="block mb-2 text-gray-500">Email</label>
            <input
              class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
              type="text"
              name="email"
              v-model="loginForm.email"
              placeholder="Enter email"
            />
          </div>
          <div class="w-full lg:w-1/2 px-5 mb-5">
            <label for="password" class="block mb-2 text-gray-500"
              >Password</label
            >
            <input
              class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
              type="password"
              name="password"
              v-model="loginForm.password"
              placeholder="Enter password"
            />
          </div>
          <button
            class="bg-blue-400 font-light px-3 py-1 mb-2 mx-5 rounded text-blue-100 hover:text-white hover:bg-blue-500"
            type="submit"
          >
            Login
          </button>
        </div>
        <div v-if="loginErrorMessage !== null">
          <p class="my-1 px-5 text-red-400 font-light">
            {{ loginErrorMessage }}
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AuthService from "../services/AuthService";
import router from "../router";
export default {
  name: "UserLogin",
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      loginErrorMessage: null,
    };
  },
  methods: {
    login() {
      AuthService.login(this.loginForm)
        .then((response) => {
          localStorage.setItem("bellwether_token", response.data.token);
          //this.$store.dispatch("user", response.data.user);
          router.push("/app/dashboard");
        })
        .catch(
          (error) => (this.loginErrorMessage = error.response.data.message)
        );
    },
  },
};
</script>

<style></style>
