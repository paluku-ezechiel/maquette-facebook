window.onload = () =>{
    var btn = document.getElementById("create-account-button");
    var close_popup = document.getElementById("close-popup");
    var overlay = document.getElementById("overlay");
    btn.addEventListener("click", (e) =>{
        e.preventDefault();
        var popup = document.getElementById("register-popup");
        popup.style.display = "block";
        overlay.style.display = "block";
    })

    close_popup.addEventListener("click", () => {
        var popup = document.getElementById("register-popup");
        popup.style.display = "none";
        overlay.style.display = "none";
    })
}