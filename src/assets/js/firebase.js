export function fetchProjects() {
  this.$http
    .get("https://vie-sample.firebaseio.com/projects.json")
    .then(response => {
      return response.json();
    })
    .then(
      data => {
        let currentProjects = data;
        return currentProjects;
      },
      error => {
        console.log(error);
      }
    );
}
