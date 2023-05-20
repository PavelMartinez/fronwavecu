let prevButton = null;
let checkbox = document.getElementById('rememberMeCheckBox');
checkbox.addEventListener("click", (e) => {
    const isButton = e.target.nodeName === 'BUTTON' || e.target.parentElement.nodeName === 'BUTTON'; 
    if (!isButton) { return; } 
    let target = e.target;
    if(target.nodeName === "DIV")
    {
        target = e.target.parentNode;
    }
    target.classList.add('selected');
    if(prevButton !== null) {
        prevButton.classList.remove('selected');
        prevButton = null;
    } // Remove .active CSS Class
    else
        prevButton = target;
});