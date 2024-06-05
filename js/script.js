function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function redirect(id) {
    if (id == 'project1') {
        window.open("https://www.github.com/igorlangoni/final_project_data_eng_makers", '_blank');  
    } else if (id == 'project2') {
        location.href = "https://www.github.com/igorlangoni/online_retail_data_pipeline";  
    } else if (id == 'project3') {
        location.href = "https://www.github.com/igorlangoni/makersbnb_project";
    } else if (id == 'linkedin-logo') {
        location.href = "https://www.linkedin.com/in/igor-langoni";
    } else if (id == 'github-logo') {
        location.href = "https://www.github.com/igorlangoni";
    }
}

