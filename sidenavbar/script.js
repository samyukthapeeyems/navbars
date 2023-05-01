const button = document.querySelector("#button");
const sidebar = document.querySelector(".sidebar");
const searchButton = document.querySelector(".bx-search");

button.onclick = () => {
    sidebar.classList.toggle("active");
}

searchButton.onclick = () => {
    sidebar.classList.toggle("active");
}