function getTransactions() {
<<<<<<< HEAD
  fetch("http://localhost:3000/transaction/all", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        Transaction ID: ${item.transaction_id} <br>
        Timestamp: ${item.transaction_date} <br>
        Category: ${item.category} <br>
        Account ID: ${item.account_id} <br>
        Amount: ${item.amount}
        </li>`;
      });
      text += "</ul>";
      $(".mypanel").html(text);
    })
    .catch((error) => console.log("error", error));
}

function getTransactionByTID() {
  var id = document.getElementById("paramId").value;
  fetch(`http://localhost:3000/transaction/by-tid?id=${id}`, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        Transaction ID: ${item.transaction_id} <br>
        Timestamp: ${item.transaction_date} <br>
        Category: ${item.category} <br>
        Account ID: ${item.account_id} <br>
        Amount: ${item.amount}
        </li>`;
      });
      text += "</ul>";
      $(".mypanel").html(text);
    })
    .catch((error) => console.log("error", error));
=======
    fetch("http://localhost:3000/transaction/all", {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            var text = `
              <table>
                <tr>
                  <th>Transaction ID</th>
                  <th>Timestamp</th>
                  <th>Category</th>
                  <th>Account Name</th>
                  <th>Amount</th>
                </tr>`;

            data.forEach((item) => {
                text += `
                    <tr>
                      <td>${item.transaction_id}</td>
                      <td>${item.transaction_date}</td>
                      <td>${item.category}</td>
                      <td>${item.account}</td>
                      <td>${item.amount}</td>
                    </tr>`;
            });
            text += "</table>";
            $(".mypanel").html(text);
        })
        .catch((error) => console.log("error", error));
}

function getTransactionByTID() {
    var id = document.getElementById("paramId").value;
    fetch(`http://localhost:3000/transaction/by-tid?id=${id}`, {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            var text = `
              <table>
                <tr>
                  <th>Transaction ID</th>
                  <th>Timestamp</th>
                  <th>Category</th>
                  <th>Account Name</th>
                  <th>Amount</th>
                </tr>`;

            data.forEach((item) => {
                text += `
                    <tr>
                      <td>${item.transaction_id}</td>
                      <td>${item.transaction_date}</td>
                      <td>${item.category}</td>
                      <td>${item.account}</td>
                      <td>${item.amount}</td>
                    </tr>`;
            });
            text += "</table>";
            $(".mypanel").html(text);
        })
        .catch((error) => console.log("error", error));
>>>>>>> 19b88298449733cfe75b65f333f35a6965d62adb
}
