<template>
  <div class="form-group">
    <label>Amount of Students</label>
    <input
      class="form-control"
      type="number"
      v-model="project.amountOfStudents"
    />
    <label>Topic</label>
    <input class="form-control" type="text" v-model="project.topic" />
    <button class="btn btn-primary" @click="submit">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentProjects: {},
      project: {
        topic: "",
        amountOfStudents: null
      }
    };
  },
  methods: {
    submit() {
      this.$http
        .post("https://vie-sample.firebaseio.com/projects.json", this.project)
        .then(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
        this.project.topic = ""
        this.project.amountOfStudents = null
    },
    checkForm() {}
  }
};
</script>

<style>
.form-control {
  margin-bottom: 2rem;
}
</style>
