
const http = require('http');
const fs = require(`fs`);
const server = http.createServer((req, res) => {
    //For GET method - printing data
    if (req.url === "/" && req.method === "GET") {
        fs.readFile(`./data.json`, (error, data) => {
            if (error) {
                res.end(JSON.stringify({ error: "Unable to convert data file" }));
            }
            const stu = JSON.parse(data);
            let output = "";
            for (let s of stu) {
                output += `Name : ${s.name}\tRegister Number : ${s.Reg}\n\n`;
            }
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end((output));
        });
    }
    //for POST method - to create new data
    else if (req.url === "/" && req.method === "POST") {
        fs.readFile(`./data.json`, (error, data) => {
            let body = "";
            req.on("data", info => body += info);
            req.on("end", () => {
                const newstu = JSON.parse(body);
                let stu = JSON.parse(data);
                stu.push(newstu);
                fs.writeFile(`./data.json`, JSON.stringify(stu));
                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Student added successfully" }));
            });
        });
    }
    //for PUT method - to update existing data
    else if (req.url === "/" && req.method === "PUT") {
        fs.readFile(`./data.json`, (error, data) => {
            let body = "";
            req.on("data", info => body += info);
            req.on("end", () => {
                const upstu = JSON.parse(body);
                let stu = JSON.parse(data);
               for(let i=0;i<stu.length;i++){
                if(stu[i].Reg===upstu.Reg){
                    stu[i]=upstu;
                    break;
                }
            }
                fs.writeFile(`./data.json`, JSON.stringify(stu));
                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Student added successfully" }));
            });
        });
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Page Not Available" }));
    }
});
server.listen(3000, () => {
    console.log("http://localhost:3000/");
});
//check to run using POST and PUT methods