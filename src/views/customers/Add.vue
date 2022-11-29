<template>
  <div>
    <h1 class="mb-10 font-semibold text-3xl">Add Customer</h1>
    <form @submit.prevent="addCustomer" class="w-full">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2 mb-5">
          <label for="name" class="block mb-2 text-gray-500">Name</label>
          <input
            class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
            type="text"
            name="name"
            v-model="addCustomerForm.name"
            placeholder="Enter name"
          />
        </div>
        <div class="w-full lg:w-1/2 px-5 mb-5">
          <label for="email" class="block mb-2 text-gray-500">Email</label>
          <input
            class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
            type="email"
            name="email"
            v-model="addCustomerForm.email"
            placeholder="Enter email"
          />
        </div>
        <div class="w-full lg:w-1/2 mb-5">
          <label for="email" class="block mb-2 text-gray-500"
            >Phone Number</label
          >
          <input
            class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
            type="text"
            name="phone_number"
            v-model="addCustomerForm.phone_number"
            placeholder="Enter phone number"
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
            v-model="addCustomerForm.password"
            placeholder="Enter password"
          />
        </div>
        <div class="w-full lg:w-1/2 mb-5">
          <label for="address_1" class="block mb-2 text-gray-500"
            >Address 1</label
          >
          <input
            class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
            type="text"
            name="address_1"
            v-model="addCustomerForm.address_1"
            placeholder="Enter primary address"
          />
        </div>
        <div class="w-full lg:w-1/2 px-5 mb-5">
          <label for="address_2" class="block mb-2 text-gray-500"
            >Address 2</label
          >
          <input
            class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
            type="text"
            name="address_2"
            v-model="addCustomerForm.address_2"
            placeholder="Enter password"
          />
        </div>
        <div class="w-full lg:w-1/2 mb-5">
          <label for="state" class="block mb-2 text-gray-500">State</label>
          <input
            class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
            type="text"
            name="state"
            v-model="addCustomerForm.state"
            placeholder="Enter state"
          />
        </div>
        <div class="w-full lg:w-1/2 px-5 mb-5">
          <label for="local_government" class="block mb-2 text-gray-500"
            >Local Government</label
          >
          <input
            class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
            type="text"
            name="local_government"
            v-model="addCustomerForm.local_government"
            placeholder="Enter local government"
          />
        </div>
        <button
          class="bg-blue-400 font-light px-3 py-1 mb-2 rounded text-blue-100 hover:text-white hover:bg-blue-500"
          type="submit"
        >
          Add
        </button>
      </div>
      <div v-if="errorMessage !== null">
        <p class="my-1 px-5 text-red-400 font-light">
          {{ errorMessage }}
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import CustomerService from "../../services/CustomerService";
import router from "../../router";
import SetAlert from "../../functions/SetAlert";

export default {
  data() {
    return {
      addCustomerForm: {
        name: "",
        email: "",
        phone_number: "",
        address_1: "",
        address_2: "",
        state: "",
        local_government: "",
        password: "",
      },
      errorMessage: null,
    };
  },
  methods: {
    addCustomer() {
      CustomerService.add(this.addCustomerForm)
        .then((response) => {
          console.log(response);
          SetAlert("Saved", "You have added a new customer!", "success");
          router.push("/app/customers");
        })
        .catch(
          (error) => (this.loginErrorMessage = error.response.data.message)
        );
    },
  },
};
</script>

<style></style>
