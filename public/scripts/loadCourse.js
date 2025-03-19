function loadCourse() {
  let url = window.location.href;
  let id = url.split("/")[url.split("/").length - 1];
  
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    let course = JSON.parse(this.response);
    document.getElementById("title").innerHTML = `${course.department} ${course.id}`; 
    document.getElementById("crsID").innerHTML = `${course.department} ${course.id}`;
    document.getElementById("crsName").innerHTML = course.name;
    document.getElementById("crsDes").innerHTML = course.description;
    document.getElementById("crsCredits").innerHTML = course.credits;
  }
  xhttp.open("GET", `/api/course/${id}`);
  xhttp.send();
}

loadCourse();