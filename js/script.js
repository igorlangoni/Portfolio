function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function redirect(link) {
    url = link
    location.href = `"${url}"`;
};

// document.getElementById('project1').onclick = function () {
//     location.href = "https://www.github.com/igorlangoni/final_project_data_eng_makers";
// };

// document.getElementById('project2').onclick = function () {
//     location.href = "https://www.github.com/igorlangoni/final_project_data_eng_makers";
// };

// document.getElementById('project3').onclick = function () {
//     location.href = "https://www.github.com/igorlangoni/final_project_data_eng_makers";
// };


