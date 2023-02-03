<template>
    <div class="flex justify-center bg-gray-100 text-blue-900 min-h-screen overflow-y-scroll" style="padding: 80px 0">
      <form @submit.prevent="apply" class="w-full lg:w-1/2">
        <div class="shadow rounded bg-white m-5 p-5">
          <form @submit.prevent="apply" class="w-full"></form>
          <h1 class="font-bold text-2xl">Get Started</h1>
          <hr class="my-2" />
          <p class="mb-5">Fill the form to join the Bellwether family</p>
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2">
              <div class="m-2">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name <span class="text-red-500">*</span></label>
                <input type="text" name="name" v-model="getStartedForm.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. John Doe" required>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="m-2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email <span class="text-red-500">*</span></label>
                <input type="email" name="email" v-model="getStartedForm.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. johndoe@myemail.com" required>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full">
              <div class="m-2">
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone <span class="text-red-500">*</span></label>
                <input type="text" name="phone" v-model="getStartedForm.phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. 08000000000" required>
              </div>
            </div>
          </div>
          <div class="mx-2 my-5"><hr></div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/3">
              <div class="m-2">
                <label for="address_1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Primary Address <span class="text-red-500">*</span></label>
                <input type="text" name="address_1" v-model="getStartedForm.address_1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. 221B Baker Street" required>
              </div>
            </div>
            <div class="w-full md:w-1/3">
              <div class="m-2">
                <label for="address_2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Secondary Address</label>
                <input type="text" name="address_2" v-model="getStartedForm.address_2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. 221B Baker Street">
              </div>
            </div>
            <div class="w-full md:w-1/3">
              <div class="m-2">
                <label for="location_type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location Type <span class="text-red-500">*</span></label>
                <select name="location_type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="getStartedForm.location_type" required>
                  <option value="">Select Location Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/3">
              <div class="m-2">
                <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State <span class="text-red-500">*</span></label>
                <select name="state" @change="onSelectState($event)" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="getStartedForm.state" required>
                  <option value="">Select state</option>
                  <option :value="state" v-for="state in states" v-bind:key="state.id">{{ state }}</option>
                </select>
              </div>
            </div>
            <div class="w-full md:w-1/3">
              <div class="m-2">
                <label for="local_government" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Local Government <span class="text-red-500">*</span></label>
                <select name="local_government" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="getStartedForm.local_government" required>
                  <option value="">Select Local Government</option>
                  <option :value="lga" v-for="lga in local_governments" v-bind:key="lga.id">{{ lga }}</option>
                </select>
              </div>
            </div>
            <div class="w-full md:w-1/3">
              <div class="m-2">
                <label for="community" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Community</label>
                <input type="text" name="community" v-model="getStartedForm.community" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. Alapere">
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
                <select name="service_plan" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="getStartedForm.service_plan" required>
                  <option value="">Select Service Plan</option>
                  <option value="gold">Gold - 10,000</option>
                  <option value="silver">Silver - 6,500</option>
                  <option value="silver">Bronze - 3,500</option>
                </select>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="m-2">
                <label for="referral_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Referral Code</label>
                <input type="text" name="referral_code" v-model="getStartedForm.referral_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. 12345">
              </div>
            </div>
          </div>
          <div class="mx-2 my-5"><hr></div>
          <div class="m-2">
            <button @click="isModalOpen = true" type="button" class="block mb-2 px-5 py-2.5 bg-red-500 hover:bg-red-700 text-white shadow rounded-lg">
              View Service Agreement
            </button>
            <label for="terms" class="block mt-2 mb-5">
              <input type="checkbox" id="terms" name="terms" required>
              I have read service agreement.
            </label>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SUBMIT</button>
          </div>
        </div>
      </form>
      <Teleport to='#modal'>
        <div v-if="isModalOpen" class="fixed overflow-y-scroll pt-20 top-0 left-0 h-screen w-screen" style="background: rgba(0,0,0,0.85)">
          <div class="relative bg-white p-5 rounded-lg shadow-lg">
            <div class="flex justify-between items-center">
              <h1 class="font-bold text-2xl">Waste Handling Policy And Responsibility of Customers</h1>
              <button @click="isModalOpen = false" type="button" class="block mb-2 px-5 py-2.5 bg-red-500 hover:bg-red-700 text-white shadow rounded-lg">
                Close
              </button>
            </div>
            <ul class="p-5">
              <li class="list-disc my-2">Being aware of the impact of waste in the environment.</li>
              <li class="list-disc my-2">Change your mindset to leave a good environmental legacy for your future generations</li>
              <li class="list-disc my-2">Ensuring that every member of the family is aware of, obedient to, and acting in accordance with the trash disposal policy.</li>
              <li class="list-disc my-2">Sorting wastes into</li>
              <ul class="pl-5">
                <li class="list-decimal my-2">organic waste, which includes food scraps, animal and plant remains, diapers, wood, and all other materials that decompose.</li>
                <li class="list-decimal my-2">Plastics</li>
                <li class="list-decimal my-2">Glass</li>
                <li class="list-decimal my-2">Metals and Aluminum</li>
                <li class="list-decimal my-2">Fabrics</li>
                <li class="list-decimal my-2">unidentifiable waste.</li>
              </ul>
              <li class="list-disc my-2">Paper, not plastic bags, should be used to wrap up food waste before throwing it in your waste collection bin or bag.</li>
              <li class="list-disc my-2">Placing of waste into the right waste holding bins, or bags</li>
              <li class="list-disc my-2">Before dropping off waste into the collection bins or bags, compress plastic and metal cans.</li>
              <li class="list-disc my-2">Before bagging, larger items should be divided into smaller pieces.</li>
              <li class="list-disc my-2">Waste collection bins and bags should be placed under shelter to avoid rain dropping into them.</li>
              <li class="list-disc my-2">All payment should be made to the bellwether recycling limited bank account provided; no payment should be made to any individual</li>
              <li class="list-disc my-2">If service charge payment is not made by the due date, a 10% late payment fee will be charged daily.</li>
              <li class="list-disc my-2">Use your registration tag number as the depositor's name when paying your garbage collection service charge.</li>
              <li class="list-disc my-2">Additional services and significant bulk garbage will incur additional charges.</li>
              <li class="list-disc my-2">To schedule a collection of bulk waste, the customer should contact Bellwether Recycling Limited.</li>
              <li class="list-disc my-2">Fridays and Saturdays are waste pickup days</li>
              <li class="list-disc my-2">Place the trash outside of your gate, in front of your house, so that it may be picked up.</li>
              <li class="list-disc my-2">10% off your service charge for a month when you refer ten (10) users within a month.</li>
              <li class="list-disc my-2">To indicate a referral, a client should use the referral option on the registration portal when registering the new customer and enter their registration tag number.</li>
              <li class="list-disc my-2">The customer is obligated to update their locations in case of change of address . For better servicing.</li>
            </ul>
            <p class="font-bold text-red-600">Agreeing implies you consent to abide by Bellwether Recycling Limited waste handling policies</p>
            <h2 class="font-bold my-2 text-red-600">Payment Details</h2>
            <div class="text-3xl font-thin text-red-600">
              <p>Account Number: 000143629</p>
              <p>Account Name: Bellwether Recycling Limited</p>
              <p>Globus Bank</p>
            </div>
            <div class="flex justify-center py-2 mt-2 border-t-2">
              <button @click="isModalOpen = false" type="button" class="block mb-2 px-5 py-2.5 bg-red-500 hover:bg-red-700 text-white shadow rounded-lg">
                Close
              </button>
            </div>
          </div>
        </div>
      </Teleport>
    </div>
  </template>
  
  <script>
  import statesData from "../../data/states.json";
  import RegistrationService from "../../services/RegistrationService";
  import _ from 'lodash';
  //import router from "../router";
  export default {
    name: "GetStartedPage",
    components: {},
    data() {
      return {
        getStartedForm: {
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
      };
    },
    mounted() {
      statesData.forEach(s => {
        this.states.push(s.state);
        this.states.sort();
      });
    },
    methods: {
      apply() {
        let formData = new FormData();
        formData.append('avatar', this.avatar);
        formData.append('id_photo', this.id_photo);
        formData.append('signature', this.signature);

        _.each(this.getStartedForm, (value, key) => {
          formData.append(key, value);
        })
        RegistrationService.register(formData)
        .then((response) => {
          //localStorage.setItem("bellwether_token", response.data.token);
          //this.$store.dispatch("user", response.data.user);
          //router.push("/app/dashboard");
          console.log(response);
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
      onSelectProfilePicture() {
        this.avatar = this.$refs.avatar.files[0];
      },
      onSelectIdPhoto() {
        this.id_photo = this.$refs.id_photo.files[0];
      },
      onSelectSignature() {
        this.signature = this.$refs.signature.files[0];
      }
    }
  };
  </script>