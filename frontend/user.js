function getUsers() {
  fetch("http://localhost:3000/user/all", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        ID: ${item.id} <br>
        Full Name: ${item.first_name} ${item.last_name} <br>
        Email: ${item.email} <br>
        Mobile: ${item.mobile}
        </li>`;
      });
      text += "</ul>";
      $(".mypanel").html(text);
    })
    .catch((error) => console.log("error", error));
}

function getUserByUID() {
  var id = document.getElementById("paramId").value;
  fetch(`http://localhost:3000/user/by-uid?id=${id}`, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        ID: ${item.id} <br>
        Full Name: ${item.first_name} ${item.last_name} <br>
        Email: ${item.email} <br>
        Mobile: ${item.mobile}
        </li>`;
      });
      text += "</ul>";
      $(".mypanel").html(text);
    })
    .catch((error) => console.log("error", error));
}
