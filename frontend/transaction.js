function getTransactions() {
  fetch("http://localhost:3000/transaction/all", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        Transaction ID: ${item.transaction_id} <br>
        Timestamp: ${item.transaction_date} <br>
        Category: ${item.category} <br>
        Account: ${item.account} <br>
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
        Account: ${item.account} <br>
        Amount: ${item.amount}
        </li>`;
      });
      text += "</ul>";
      $(".mypanel").html(text);
    })
    .catch((error) => console.log("error", error));
}
