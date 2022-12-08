function changelikes(e, icon, number) {
    const totaLikes = document.querySelector(".stats__likes__number");
    if (icon.classList.contains("heart--empty")){
        number.textContent = parseInt(number.textContent) + 1; 
        totaLikes.textContent = parseInt(totaLikes.textContent) + 1;
        icon.classList.remove("heart--empty");
        icon.classList.remove("fa-regular");
        icon.classList.add("heart--filled");
        icon.classList.add("fa-solid");   
    }
    else {
        number.textContent = parseInt(number.textContent) - 1;
        totaLikes.textContent = parseInt(totaLikes.textContent) - 1;
        icon.classList.remove("heart--filled");
        icon.classList.remove("fa-solid");
        icon.classList.add("heart--empty");  
        icon.classList.add("fa-regular");
    }

}