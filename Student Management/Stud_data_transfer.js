//Program to fetch data from JSON object
function getData() {
    fetch("stud_data.json")
        .then(response => response.json())
        .then(data => {
            let tab = `<table border="2">
            <tr>
                <th>Register Number</th>
                <th>Name</th>
                <th>Department</th>
            </tr>`;
            data.forEach(stud => {
                tab += `<tr>
                    <td>${stud.Roll_Number}</td>
                    <td>${stud.Name}</td>
                    <td>${stud.Department}</td>
                    </tr>`;
            });
            tab += `</table>`;
            document.getElementById("Student_data").innerHTML = tab;
        })
}

function clearData() {
    document.getElementById("Student_data").innerHTML = "";
}

