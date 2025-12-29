cur = 0;

function sear_books() {
    const categ = document.getElementById("sel");
    fetch("Libr.xml")
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => {
            const cat = data.getElementsByTagName("Category");
            let table = "<table border=\"1\"><tr><th>Name</th><th>Author</th><th>Cost</th><th>Available copies</th><th>Pick the books</th></tr>";
            for (let i = 0; i < cat.length; i++) {
                if (cat[i].getAttribute("name") == categ.value) {
                    const book = cat[i].getElementsByTagName("Book");
                    for (let j = 0; j < book.length; j++) {
                        const n = book[j].getElementsByTagName("Name")[0].textContent;
                        const au = book[j].getElementsByTagName("Author")[0].textContent;
                        const co = book[j].getElementsByTagName("Cost")[0].textContent;
                        const cp = book[j].getElementsByTagName("Available")[0].textContent;
                        table += `<tr>
                        <td class="n">${n}</td>
                        <td>${au}</td>
                        <td>${co}</td>
                        <td class="avail">${cp}</td>
                        <td><input type="checkbox" class="ckbox" value="${co}"></td>
                        </tr>`;
                    }
                }
            }
            table += "</table>";
            document.getElementById("table_container").innerHTML = table;
        });
}

function calctotal() {
    const ck = document.querySelectorAll(".ckbox:checked");
    let tot = 0;
    ck.forEach(check => {
        const row = check.closest("tr");
        const av = row.querySelector(".avail");
        let a = parseInt(av.textContent);
        if (a > 0) {
            a--;
            av.textContent = a;
            tot += parseInt(check.value);
        } else {
            alert("Selected Book is out of stock !");
        }
        check.checked = false;
    });
    cur += tot;
    if (cur == 0)
        document.getElementById("Total").innerHTML = `Total Amount : 0 rs`;
    else
        document.getElementById("Total").innerHTML = `Total Amount : ${cur} rs`;
}

function rent() {
    const ck = document.querySelectorAll(".ckbox:checked");
    ck.forEach(check => {
        const row = check.closest("tr");
        const av = row.querySelector(".avail").textContent;
        const name = row.querySelector(".n").textContent;
        let a = parseInt(av);
        if (a > 0) {
            a--;
            av.textContent = a;
        } else {
            alert("Selected Book is out of stock !");
        }
        check.checked = false;
        document.getElementById("rented").innerHTML += `<li>${name}</li>`;
    });
}
