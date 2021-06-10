function getAccounts() {
  fetch("http://localhost:3000/account/all", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        Account ID: ${item.id} <br>
        Account Type: ${item.type} <br>
        Balance: ${item.balance}
        </li>`;
      });
      text += "</ul>";
      $(".mypanel").html(text);
    })
    .catch((error) => console.log("error", error));
}

function getAccountByAID() {
  var id = document.getElementById("paramId").value;
  fetch(`http://localhost:3000/account/by-aid?id=${id}`, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        Account ID: ${item.id} <br>
        Account Type: ${item.type} <br>
        Balance: ${item.balance}
        </li>`;
      });
      text += "</ul>";
      $(".mypanel").html(text);
    })
    .catch((error) => console.log("error", error));
}
