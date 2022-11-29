<template>
  <div>
    <h1 class="mb-10 font-semibold text-3xl">Customers</h1>
    <Table :tableData="customers" :titles="titles" />
  </div>
</template>

<script>
import CustomerService from "../../services/CustomerService";
import Table from "../../components/Table.vue";
import DisplayAlert from "../../functions/DisplayAlert";
export default {
  components: { Table },
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
};
</script>

<style></style>
