function print1(event)
{  event.preventDefault();
    let data = JSON.parse(localStorage.getItem("data")) || [];
    let output=`<table border="2">
    <tr>
    <th>Name</th>
    <th>Age</th>
    </tr>`;
    localStorage.setItem("data",JSON.stringify(data));
for(let data1 of data)
{
    output+=`
    <tr><td>${data1.name}</td><td>${data1.age}</td></tr>`;
}
output+="</table>";
    document.getElementById("output").innerHTML=output;
   
}

function input(event)
{
     event.preventDefault();
     let data = JSON.parse(localStorage.getItem("data")) || [];
    const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;
    if(name==="" || age==="")
    {
        alert("Fill the form pal");
        return;
    }
    data.push({name,age});
    localStorage.setItem("data",JSON.stringify(data));
}