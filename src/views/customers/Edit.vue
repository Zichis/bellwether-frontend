<template>
  <div>
    <h1 class="mb-10 font-semibold text-3xl">Edit Customer</h1>
    <form @submit.prevent="editCustomer" class="w-full">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2 mb-5">
          <label for="name" class="block mb-2 text-gray-500">Name</label>
          <input
            class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
            type="text"
            name="name"
            v-model="editCustomerForm.name"
            placeholder="Enter name"
          />
        </div>
        <div class="w-full lg:w-1/2 px-5 mb-5">
          <label for="email" class="block mb-2 text-gray-500">Email</label>
          <input
            class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
            type="email"
            name="email"
            v-model="editCustomerForm.email"
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
            v-model="editCustomerForm.phone_number"
            placeholder="Enter phone number"
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
            v-model="editCustomerForm.address_1"
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
            v-model="editCustomerForm.address_2"
            placeholder="Enter secondary address"
          />
        </div>
        <div class="w-full lg:w-1/2 mb-5">
          <label for="state" class="block mb-2 text-gray-500">State</label>
          <input
            class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
            type="text"
            name="state"
            v-model="editCustomerForm.state"
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
            v-model="editCustomerForm.local_government"
            placeholder="Enter local government"
          />
        </div>
      </div>
      <button
        class="bg-blue-400 font-light px-3 py-1 mb-2 rounded text-blue-100 hover:text-white hover:bg-blue-500"
        type="submit"
      >
        Edit
      </button>
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
      customer: {},
      editCustomerForm: {
        name: "",
        email: "",
        phone_number: "",
        address_1: "",
        address_2: "",
        state: "",
        local_government: "",
      },
      errorMessage: null,
    };
  },
  created() {
    CustomerService.show(this.$route.params.id)
      .then((response) => {
        const customer = response["data"]["data"];
        this.customer = customer;
        this.editCustomerForm.name = this.customer.name;
        this.editCustomerForm.email = this.customer.email;
        this.editCustomerForm.phone_number = this.customer.phone_number;
        this.editCustomerForm.address_1 = this.customer.address_1;
        this.editCustomerForm.address_2 = this.customer.address_2;
        this.editCustomerForm.state = this.customer.state;
        this.editCustomerForm.local_government = this.customer.local_government;
      })
      .catch((error) => (this.errorMessage = error.response.data.message));
  },
  methods: {
    editCustomer() {
      CustomerService.update(this.$route.params.id, this.editCustomerForm)
        .then(() => {
          SetAlert("Updated", "You have updated customer!", "success");
          router.push("/app/customers");
        })
        .catch((error) => (this.errorMessage = error.response.data.message));
    },
  },
};
</script>

<style></style>
