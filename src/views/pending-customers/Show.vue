<template>
    <div class="">
        <div class="flex flex-col items-center p-5 md:p-20 rounded shadow-md mb-10" style="background: url(https://images.pexels.com/photos/322461/pexels-photo-322461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2); background-repeat: no-repeat; background-size: cover;">
            <!--<img :src="customer?.avatar" alt="avatar" class="rounded-full w-32 border-2">-->
            <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-full w-20 border-2 border-green-300"
            alt="Avatar"
            />
            <p class="my-2 text-white text-2xl md:text-4xl font-bold">{{ customer?.name }}</p>
        </div>
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 p-3">
                <div class="bg-white p-2 rounded shadow-md md:h-64 overflow-y-scroll">
                    <h2 class="font-bold text-blue-500">Bio</h2>
                    <hr class="my-3" />
                    <div class="flex flex-wrap">
                        <div class="w-full md:w-1/2 mb-2">
                            <p class="text-gray-600">Name</p>
                            <p class="text-gray-800 text-xl">{{ customer?.name }}</p>
                        </div>
                        <div class="w-full md:w-1/2 mb-2">
                            <p class="text-gray-600">Email</p>
                            <p class="text-gray-800 text-xl">{{ customer?.email }}</p>
                        </div>
                        <div class="w-full md:w-1/2 mb-2">
                            <p class="text-gray-600">Phone</p>
                            <p class="text-gray-800 text-xl">{{ customer?.phone }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 p-3">
                <div class="bg-white p-2 rounded shadow-md md:h-64 overflow-y-scroll">
                    <h2 class="font-bold text-yellow-500">Address</h2>
                    <hr class="my-3" />
                    <div class="flex flex-wrap">
                        <div class="w-full md:w-1/2 mb-2">
                            <p class="text-gray-600">Address 1</p>
                            <p class="text-gray-800 text-xl">{{ customer?.address_1 }}</p>
                        </div>
                        <div class="w-full md:w-1/2 mb-2">
                            <p class="text-gray-600">Address 2</p>
                            <p class="text-gray-800 text-xl">{{ customer?.address_2 }}</p>
                        </div>
                        <div class="w-full md:w-1/2 mb-2">
                            <p class="text-gray-600">State</p>
                            <p class="text-gray-800 text-xl">{{ customer?.state }}</p>
                        </div>
                        <div class="w-full md:w-1/2 mb-2">
                            <p class="text-gray-600">Local Government</p>
                            <p class="text-gray-800 text-xl">{{ customer?.local_government }}</p>
                        </div>
                        <div class="w-full md:w-1/2 mb-2">
                            <p class="text-gray-600">Town</p>
                            <p class="text-gray-800 text-xl">{{ customer?.community }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 p-3">
                <div class="bg-white p-2 rounded shadow-md md:h-64 overflow-y-scroll">
                    <h2 class="font-bold text-green-500">Plans</h2>
                    <hr class="my-3" />
                    <div class="flex flex-wrap">
                        <div class="w-full md:w-1/2 mb-2">
                            <p class="text-gray-600">Location Type</p>
                            <p class="text-gray-800 text-xl capitalize">{{ customer?.location_type }}</p>
                        </div>
                        <div class="w-full md:w-1/2 mb-2">
                            <p class="text-gray-600">Service Plan</p>
                            <p class="text-gray-800 text-xl capitalize">{{ customer?.service_plan }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 p-3">
                <div class="bg-white p-2 rounded shadow-md h-64 overflow-y-scroll">
                    <h2 class="font-bold text-red-500">Others</h2>
                    <hr class="my-3" />
                    <div class="flex flex-wrap">
                        <div class="w-full md:w-1/2 mb-2">
                            <p class="text-gray-600">ID Photo</p>
                            <a :href="customer?.id_photo" class="hover:underline" target="_blank" rel="noopener noreferrer">Click to view</a>
                        </div>
                        <div class="w-full md:w-1/2 mb-2">
                            <p class="text-gray-600">Signature</p>
                            <a :href="customer?.signature" class="hover:underline" target="_blank" rel="noopener noreferrer">Click to view</a>
                        </div>
                        <div class="w-full md:w-1/2 mb-2">
                            <p class="text-gray-600">Referral Code</p>
                            <p class="text-gray-800 text-xl capitalize">{{ customer?.referral_code }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomerService from "../../services/PendingCustomerService";
export default {
    name: "ShowPendingCustomer",
    data() {
        return {
            customer: null
        };
    },
    created() {
        CustomerService.show(this.$route.params.id)
            .then((response) => {
                console.log(response['data']);
                this.customer = response['data'];
            })
            .catch((error) => (this.errorMessage = error.response.data.message));
    }
}
</script>

<style></style>
  