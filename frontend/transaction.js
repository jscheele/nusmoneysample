function getTransactions() {
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
                      <td>${item.account_id}</td>
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
                      <td>${item.account_id}</td>
                      <td>${item.amount}</td>
                    </tr>`;
            });
            text += "</table>";
            $(".mypanel").html(text);
        })
        .catch((error) => console.log("error", error));
}
