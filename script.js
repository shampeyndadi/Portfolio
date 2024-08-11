const x = document.querySelector(".Github");
const y = document.querySelector(".Instagram");

function goToProfileGit(){
    window.open("https://github.com/shampeyndadi", "_blank");
}

function goToProfileIG(){
    window.open("https://www.instagram.com/jedidiah_30/?hl=en", "_blank");
}

x.addEventListener("click", goToProfileGit);
y.addEventListener("click", goToProfileIG);