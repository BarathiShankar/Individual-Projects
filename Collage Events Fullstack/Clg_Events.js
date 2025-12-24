function Events() {
    fetch("Clg_Events.xml")
        .then(response => response.text())
        .then(str => {
            const parser = new DOMParser(); // FIXED
            const xmlDoc = parser.parseFromString(str, "text/xml");
            const events = xmlDoc.getElementsByTagName("event");

            let output = "<ul>";
            for (let i = 0; i < events.length; i++) {
                output += "<li>" + events[i].textContent.trim() + "</li>";
            }
            output += "</ul>";

            document.getElementById("list").innerHTML = output;
        })
        .catch(err => console.error("Error loading XML:", err));
}
