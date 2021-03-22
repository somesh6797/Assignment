const hamContainer = document.querySelector(".ham-container")
const ham = document.querySelector(".ham")
const linkList=document.querySelector(".link-list")


let clicked = false;

hamContainer.addEventListener("click", () => {
    if (clicked) {
        ham.classList.remove("open");
        clicked = false;
        linkList.style.left = "-40%";
    }
    else {
        ham.classList.add("open");
        clicked = true;
        linkList.style.left = "0";
        
    }
})