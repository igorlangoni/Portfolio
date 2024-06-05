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
        window.open("https://www.github.com/igorlangoni/online_retail_data_pipeline", '_blank');  
    } else if (id == 'project3') {
        window.open("https://www.github.com/igorlangoni/makersbnb_project", '_blank'); 
    } else if (id == 'linkedin-logo') {
        window.open("https://www.linkedin.com/in/igor-langoni", '_blank'); 
    } else if (id == 'github-logo') {
        window.open("https://www.github.com/igorlangoni", '_blank'); 
    }
}

