<template lang="">
    <div>
        <NavBar />
        <router-view />
    </div>
</template>
<script lang="js">
import NavBar from "../../components/NavBar.vue";
export default {
    components: { NavBar },
}
</script>
<style lang="">
    
</style>