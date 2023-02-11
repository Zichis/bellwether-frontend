<template>
  <div>
    <h1 class="mb-10 font-semibold text-3xl">Customers</h1>
    <CustomerTable
      :tableData="customers"
      :titles="titles"
      @delete="deleteCustomer"
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
import CustomerService from "../../services/CustomerService";
import CustomerTable from "../../components/Table.vue";
import DisplayAlert from "../../functions/DisplayAlert";
import SetAlert from "../../functions/SetAlert";
import router from "../../router";
export default {
  name: "ListCustomer",
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
        const customers = response["data"]["data"];
        this.customers = customers;
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
      router.push(`/app/customers/${id}`);
    },
  },
};
</script>

<style></style>
