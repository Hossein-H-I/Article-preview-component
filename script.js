var btn = document.querySelector('button');

btn.addEventListener('click', () =>{
    const shareOption = document.getElementById("share_option");
    shareOption.classList.toggle("active-share-option")

    const shareIcon = document.querySelector(".share-icon")
    shareIcon.classList.toggle("active-shareIcon")

    btn.classList.toggle("active-btn");

    const footer = document.querySelector("footer");
    footer.classList.toggle("active");
});
