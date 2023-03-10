<template>
  <div>
    <h1 class="mb-10 font-semibold text-3xl">Add Customer</h1>
    <form @submit.prevent="addCustomer" class="w-full">
        <div class="shadow rounded bg-white p-5">
          <form @submit.prevent="apply" class="w-full"></form>
          <h1 class="font-bold text-2xl">Get Started</h1>
          <hr class="my-2" />
          <p class="mb-5">Fill in customer details</p>
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2">
              <div class="m-2">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name <span class="text-red-500">*</span></label>
                <input type="text" name="name" v-model="addCustomerForm.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. John Doe" required>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="m-2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email <span class="text-red-500">*</span></label>
                <input type="email" name="email" v-model="addCustomerForm.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. johndoe@myemail.com" required>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-1/2">
              <div class="m-2">
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone <span class="text-red-500">*</span></label>
                <input type="text" name="phone" v-model="addCustomerForm.phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. 08000000000" required>
              </div>
            </div>
          </div>
          <div class="mx-2 my-5"><hr></div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/3">
              <div class="m-2">
                <label for="address_1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Primary Address <span class="text-red-500">*</span></label>
                <input type="text" name="address_1" v-model="addCustomerForm.address_1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. 221B Baker Street" required>
              </div>
            </div>
            <div class="w-full md:w-1/3">
              <div class="m-2">
                <label for="address_2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Secondary Address</label>
                <input type="text" name="address_2" v-model="addCustomerForm.address_2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. 221B Baker Street">
              </div>
            </div>
            <div class="w-full md:w-1/3">
              <div class="m-2">
                <label for="location_type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location Type <span class="text-red-500">*</span></label>
                <select name="location_type" @change="onSelectLocationType($event)" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="addCustomerForm.location_type" required>
                  <option value="">Select Location Type</option>
                  <option :value="location_type.id" v-for="location_type in location_types" v-bind:key="location_type.id">{{ location_type.name }}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/3">
              <div class="m-2">
                <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State <span class="text-red-500">*</span></label>
                <select name="state" @change="onSelectState($event)" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="addCustomerForm.state" required>
                  <option value="">Select state</option>
                  <option :value="state" v-for="state in states" v-bind:key="state.id">{{ state }}</option>
                </select>
              </div>
            </div>
            <div class="w-full md:w-1/3">
              <div class="m-2">
                <label for="local_government" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Local Government <span class="text-red-500">*</span></label>
                <select name="local_government" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="addCustomerForm.local_government" required>
                  <option value="">Select Local Government</option>
                  <option :value="lga" v-for="lga in local_governments" v-bind:key="lga.id">{{ lga }}</option>
                </select>
              </div>
            </div>
            <div class="w-full md:w-1/3">
              <div class="m-2">
                <label for="community" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Community</label>
                <input type="text" name="community" v-model="addCustomerForm.community" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. Alapere">
              </div>
            </div>
          </div>
          <div class="mx-2 my-5"><hr></div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/3">
              <div class="m-2">
                <label for="avatar" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Picture</label>
                <input @change="onSelectProfilePicture()" ref="avatar" type="file" name="avatar" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
            </div>
            <div class="w-full md:w-1/3">
              <div class="m-2">
                <label for="id_photo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Identification Photo <span class="text-red-500">*</span></label>
                <input @change="onSelectIdPhoto()" ref="id_photo" type="file" name="id_photo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              </div>
            </div>
            <div class="w-full md:w-1/3">
              <div class="m-2">
                <label for="signature" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Signature <span class="text-red-500">*</span></label>
                <input @change="onSelectSignature()" ref="signature" type="file" name="signature" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              </div>
            </div>
          </div>
          <div class="mx-2 my-5"><hr></div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2">
              <div class="m-2">
                <label for="service_plan" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Plan <span class="text-red-500">*</span></label>
                <select name="service_plan" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="addCustomerForm.service_plan" required>
                  <option value="">Select Service Plan</option>
                  <option :value="service_plan.id" v-for="service_plan in service_plans" v-bind:key="service_plan.id">{{ service_plan.name }} - {{ service_plan.quantity_per_week }} (₦{{ service_plan.service_charge }})</option>
                </select>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="m-2">
                <label for="referral_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Referral Code</label>
                <input type="text" name="referral_code" v-model="addCustomerForm.referral_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. 12345">
              </div>
            </div>
          </div>
          <div class="mx-2 my-5"><hr></div>
          <div class="m-2">
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SUBMIT</button>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
import RegistrationService from "../../services/RegistrationService";
import LocationTypeService from "../../services/LocationTypeService";
import ServicePlanService from "../../services/ServicePlanService";
import router from "../../router";
import SetAlert from "../../functions/SetAlert";
import statesData from "../../data/states.json";
import _ from 'lodash';

export default {
  name: "AddCustomer",
  data() {
    return {
      addCustomerForm: {
        name: "",
        email: "",
        phone: "",
        address_1: "",
        address_2: "",
        state: "",
        local_government: "",
        service_plan: "",
        location_type: "",
      },
      errorMessage: null,
      states: [],
      local_governments: [],
      isModalOpen: false,
      avatar: null,
      id_photo: null,
      signature: null,
      location_types: [],
      service_plans: [],
      all_plans: [],
    };
  },
  mounted() {
    statesData.forEach(s => {
      this.states.push(s.state);
      this.states.sort();
    });

    LocationTypeService.index()
      .then((response) => {
        this.location_types = response.data;
      })
      .catch(
        (error) => (this.loginErrorMessage = error.response.data.message)
      );

    ServicePlanService.index()
      .then((response) => {
        this.all_plans = response.data;
      })
      .catch(
        (error) => (this.loginErrorMessage = error.response.data.message)
      );
  },
  methods: {
    addCustomer() {
      let formData = new FormData();
      formData.append('avatar', this.avatar);
      formData.append('id_photo', this.id_photo);
      formData.append('signature', this.signature);

      _.each(this.addCustomerForm, (value, key) => {
        formData.append(key, value);
      })
      
      RegistrationService.register(formData)
        .then((response) => {
          console.log(response);
          SetAlert("Saved", "You have added a new customer!", "success");
          router.push("/app/pending-approvals");
        })
        .catch(
          (error) => (this.loginErrorMessage = error.response.data.message)
        );
    },
    onSelectState(event) {
      let selectedState = event.target.value;
      statesData.forEach(s => {
        if (s.state == selectedState) {
          this.local_governments = s.lgas;
        }
      });
    },
    onSelectLocationType(event) {
      this.service_plans = [];
      let selectedLocationType = event.target.value;
      this.all_plans.forEach(p => {
        if (p.location_type_id == selectedLocationType) {
          this.service_plans.push(p);
        }
      });
    },
    onSelectProfilePicture() {
      this.avatar = this.$refs.avatar.files[0];
    },
    onSelectIdPhoto() {
      this.id_photo = this.$refs.id_photo.files[0];
    },
    onSelectSignature() {
      this.signature = this.$refs.signature.files[0];
    }
  },
};
</script>

<style></style>
