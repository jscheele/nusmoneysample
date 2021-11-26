function getUsers() {
    fetch("http://localhost:3000/user/all", {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            var text = `
              <table>
                <tr>
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                </tr>`;

            data.forEach((item) => {
                text += `
                    <tr>
                      <td>${item.id}</td>
                      <td>${item.first_name} ${item.last_name}</td>
                      <td>${item.mobile}</td>
                      <td>${item.email}</td>
                    </tr>`;
            });
            text += "</table>";
            $(".mypanel").html(text);
        })
        .catch((error) => console.log("error", error));
}

function getUserByUID() {
    var id = document.getElementById("paramId").value;
    fetch(`http://localhost:3000/user/by-uid?id=${id}`, {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            var text = `
              <table>
                <tr>
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                </tr>`;

            data.forEach((item) => {
                text += `
                    <tr>
                      <td>${item.id}</td>
                      <td>${item.first_name} ${item.last_name}</td>
                      <td>${item.mobile}</td>
                      <td>${item.email}</td>
                    </tr>`;
            });
            text += "</table>";
            $(".mypanel").html(text);
        })
        .catch((error) => console.log("error", error));
}
