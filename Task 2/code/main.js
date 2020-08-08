const greeting = document.getElementsByClassName("greeting")[0];

const sections = [
    ["login", "login window"],
    ["profile", "my profile"],
    ["about", "about game"]
]

const application = document.querySelector("#application");
const nav = document.getElementById('navigation');

for (let section of sections) {
    const button = document.createElement("input");
    button.setAttribute("type", "button")
    button.setAttribute("data-section", section[0]);
    button.value = section[1];
    nav.appendChild(button);
}


const  liveSectionsCollection = application.getElementsByTagName("section");

nav.addEventListener("click", function (event) {
    const sectionId = event.target.getAttribute("data-section");
    console.log(sectionId);

    const liveSectionsArray = Array.from(liveSectionsCollection)

    liveSectionsArray.forEach(function (sectionElement) {
        sectionElement.hidden = true;
        if (sectionElement.id === sectionId) {
            sectionElement.hidden = false;
        }
    })
})