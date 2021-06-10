function getAccounts() {

  fetch("http://localhost:3000/account/all", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        Account ID: ${item.account_id} <br>
        Account Name: ${item.account_name} <br>
        Account Type: ${item.account_type} <br>
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
        Account ID: ${item.account_id} <br>
        Account Name: ${item.account_name} <br>
        Account Type: ${item.account_type} <br>
        Balance: ${item.balance}
        </li>`;
      });
      text += "</ul>";
      $(".mypanel").html(text);
    })
    .catch((error) => console.log("error", error));

    fetch("http://localhost:3000/account/all", {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            var text = `
              <table>
                <tr>
                  <th>Account ID</th>
                  <th>User ID</th>
                  <th>Account Name</th>
                  <th>Account Type</th>
                  <th>Balance</th>
                </tr>`;

            data.forEach((item) => {
                text += `
                    <tr>
                      <td>${item.account_id}</td>
                      <td>${item.user_id}</td>
                      <td>${item.account_name}</td>
                      <td>${item.account_type}</td>
                      <td>${item.balance}</td>
                    </tr>`;
            });
            text += "</table>";
            $(".mypanel").html(text);
        })
        .catch((error) => console.log("error", error));
}

function getAccountByAID() {
    var id = document.getElementById("paramId").value;
    fetch(`http://localhost:3000/account/by-aid?id=${id}`, {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            var text = `
              <table>
                <tr>
                  <th>Account ID</th>
                  <th>User ID</th>
                  <th>Account Name</th>
                  <th>Account Type</th>
                  <th>Balance</th>
                </tr>`;

            data.forEach((item) => {
                text += `
                    <tr>
                      <td>${item.account_id}</td>
                      <td>${item.user_id}</td>
                      <td>${item.account_name}</td>
                      <td>${item.account_type}</td>
                      <td>${item.balance}</td>
                    </tr>`;
            });

            text += "</table>";
            $(".mypanel").html(text);
        })
        .catch((error) => console.log("error", error));

}
