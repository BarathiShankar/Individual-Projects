function remove() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    if (students.length == 0) {
        alert("No student available to delete");
        return;
    }
    students.pop();
    localStorage.setItem("students", JSON.stringify(students));
    load();
}

function load() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    // if (students.length == 0) {
    //     alert("No students in database");
    //     return;
    // }
    let tab = `<table border="1">
        <tr>
            <th>Name</th>
            <th>Department</th>
        </tr>`;
    students.forEach(s => {
        tab += `<tr>
                <td>${s.Name}</td>
                <td>${s.Department}</td>
                </tr>`;
    });
    tab += `</table>`;
    document.getElementById("stud_data").innerHTML = tab;
}

function clr() {
    localStorage.removeItem("students");
    document.getElementById("stud_data").innerHTML = "";
    document.getElementById("name").value = "";
    document.getElementById("dept").value = "";
}

function Enter() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    const stud = {
        Name: document.getElementById("name").value,
        Department: document.getElementById("dept").value
    };
    students.push(stud);
    localStorage.setItem("students", JSON.stringify(students));
    alert("Data is stored");
    load();
}

