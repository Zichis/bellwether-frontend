<template>
    <div>
      <h1 class="mb-10 font-semibold text-3xl">Pending Approvals</h1>
      <CustomerTable
        :tableData="customers"
        :titles="titles"
        @approve="approveCustomer"
        @edit="editCustomer"
        @view="viewCustomer"
        v-if="customers.length > 0"
      />
      <div v-if="customers.length == 0" class="">
        <p class="text-2xl font-thin">There are no customers.</p>
      </div>
    </div>
  </template>
  
  <script>
  import CustomerService from "../../services/PendingCustomerService";
  import CustomerTable from "../../components/PendingCustomersTable.vue";
  import DisplayAlert from "../../functions/DisplayAlert";
  import SetAlert from "../../functions/SetAlert";
  import router from "../../router";
  export default {
    name: "ListPendingCustomers",
    components: { CustomerTable },
    data() {
      return {
        customers: [],
        titles: ["Name", "Email", "Address", "Phone"],
        errorMessage: "",
      };
    },
    created() {
      CustomerService.index()
        .then((response) => {
          console.log(response);
          const customers = response["data"];
          this.customers = customers;
          console.log(this.customers);
        })
        .catch((error) => (this.errorMessage = error.response.data.message));
    },
    mounted() {
      DisplayAlert(this.$swal);
    },
    methods: {
      deleteCustomer(id) {
        CustomerService.delete(id)
          .then((response) => {
            const customers = response["data"]["data"];
            this.customers = customers;
            SetAlert("Deleted", "You have deleted customer!", "success");
            DisplayAlert(this.$swal);
          })
          .catch((error) => (this.errorMessage = error.response.data.message));
      },
      editCustomer(id) {
        router.push(`/app/customers/${id}/edit`);
      },
      viewCustomer(id) {
        router.push(`/app/pending-approvals/${id}`);
      },
      approveCustomer(id) {
        CustomerService.approve(id)
          .then((response) => {
            const customers = response["data"];
            this.customers = customers;
            SetAlert("Approved", "Customer has been approved!", "success");
            DisplayAlert(this.$swal);
          })
          .catch((error) => (this.errorMessage = error.response.data.message));
      }
    },
  };
  </script>
  
  <style></style>
  