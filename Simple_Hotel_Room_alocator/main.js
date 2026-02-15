
const xml2js = require('xml2js');
function print1(event)
{  event.preventDefault();  

    
    // fetch(`data.json`) // READ DATA FROM JSON
    // .then(res=>res.json())
    // .then(data =>{
    //     let out=`<table border="1"><tr><th>Name</th><th>Age</th></tr>`;
    //     for(r of data)
    //     {
    //         out+=`<tr><td>${r.name}</td><td>${r.age}</td></tr>`;
    //     }
    //     out+=`</table>`;
    //     document.getElementById("output").innerHTML=out;
    // }
    // )


    // fetch('dataxml.xml') READ DATA FROM XML
    //     .then(res=>res.text())
    //     .then(data=>{
    //         let out='<table border="1"><tr><th>Name</th><th>Age</th></tr>';
    //         const parser = new DOMParser();
    //         const xmlDoc = parser.parseFromString(data,'text/xml');
    //         const us=xmlDoc.getElementsByTagName("user");
    //         for(let i=0;i<us.length;i++)
    //         {
    //             out+=`<tr><td>${us[i].getElementsByTagName("name")[0].textContent}</td><td>${us[i].getElementsByTagName("age")[0].textContent}</td></tr>`;
    //         }
    //         out+=`</table>`;
    //         document.getElementById("output").innerHTML=out;
    //     })

    // fs.readFile('dataxml.xml',(err,data)=>{ FOR SERVER LOADING XML
    //     if(err)
    //     {
    //         console.log(err);
    //         return;
    //     }
    //     let out='<table border="1"><tr><th>Name</th><th>Age</th></tr>';
    //     const parser = new xml2js.Parser();
    //     parser.parseString(data,(err,res)=>{
    //         if(err)
    //         {
    //             console.log(err);
    //             return;
    //         }
    //         for(let cont of res.system.user)
    //         {
    //             out+=`<tr><td>${cont.name[0]}</td><td>${cont.age[0]}</td></tr>`;
    //         }
    //         out+=`</table>`;
    //         document.getElementById("output").innerHTML=out;
    //     });
    // });


//     let data = JSON.parse(localStorage.getItem("data")) || []; FOR LOCAL STORAGE - READ
//     let output=`<table border="2">
//     <tr>
//     <th>Name</th>
//     <th>Age</th>
//     </tr>`;
//     localStorage.setItem("data",JSON.stringify(data));
// for(let data1 of data)
// {
//     output+=`
//     <tr><td>${data1.name}</td><td>${data1.age}</td></tr>`;
// }
// output+="</table>";
//     document.getElementById("output").innerHTML=output;
   
}

function input(event)
{   
     event.preventDefault();


    //  let data = JSON.parse(localStorage.getItem("data")) || []; FOR LOCALSTORAGE - WRITE
    // const name=document.getElementById("name").value;
    // const age=document.getElementById("age").value;
    // if(name==="" || age==="")
    // {
    //     alert("Fill the form pal");
    //     return;
    // }
    // data.push({name,age});
    // localStorage.setItem("data",JSON.stringify(data));
}