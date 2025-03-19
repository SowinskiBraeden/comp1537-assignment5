function loadCourses() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("coursesTarget").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "api/courses");
  xhttp.send();

}

async function loaddata() {
  let response = await fetch("/api/stuff").then(response => response.json());
  console.log(response);
}

loadCourses();