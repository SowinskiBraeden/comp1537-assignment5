const express = require("express");
const path = require("path");

const app = express();
const port = 8000;

const courses = require("./database/courses.json");

app.use("/static", express.static(path.join(__dirname, "./public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, "./app/index.html"));
  return res.status(200);
});

/*** API STUFF ***/

app.get("/course/:id", (req, res) => {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, "./app/course.html"));
  return res.status(200);
});

app.get("/api/course/:id", (req, res) => {
  res.set('Content-Type', 'text/json');
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id === req.params.id) {
      res.send(courses[i]);
      return res.status(200);
    }
  }
  res.send({
    "success": false,
    "message": `course not found.`
  });
  return res.status(404);
});

app.get("/api/courses", (req, res) => {  
  res.set('Content-Type', 'text/html');
  let table = `
    <div class="courses-container">
    <table class="courses">
      <thead>
        <tr>
          <th>Crs. Name</th>
          <th>Crs. Number</th>
          <th>Crs. Credits</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let i = 0; i < courses.length; i++) {
    let course = `
          <tr>
            <td><a href="/course/${courses[i].id}">${courses[i].name}</a></td>
            <td>${courses[i].department} ${courses[i].id}</td>
            <td>${courses[i].credits}</td>
           </tr>
    `;
    table = table + course;
  }
  table = table + `
      </tbody>
    </table>
    </div>
  `;

  res.send(table);
  return res.status(200);
});

/*** 404 page ***/

app.get("*", (req, res) => {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, "./app/404.html"));
  return res.status(404);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
