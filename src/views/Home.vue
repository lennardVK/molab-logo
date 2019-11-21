<template>
  <div class="container">
    <div class="ml_wrapper col-md-12">
      <ml-form></ml-form>
    </div>
    <div class="ml_wrapper col-md-12">
      <ml-logo></ml-logo>
    </div>
  </div>
</template>

<script>
import Firebase from "../assets/js/firebase.js";
import MlForm from "@/components/MlForm.vue";
import LogoWrapper from "@/components/LogoWrapper.vue";

export default {
  data: function() {
    return {
      message: Firebase
    };
  },

  components: {
    "ml-form": MlForm,
    "ml-logo": LogoWrapper
  },

  methods: {
    mounted() {
      console.log("currentProjects: ", this.message);
    }
  }
};
</script>

<style></style>
