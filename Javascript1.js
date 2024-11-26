function showLoadingScreen(url) {
    document.getElementById("loadingScreen").style.display = "flex";
    setTimeout(function() {
        window.location.href = url;
    }, 1000);
}



function toggleTranslation() {
    var translation = document.getElementById("translation");
    if (translation.style.display === "none") {
        translation.style.display = "block";
    } else {
        translation.style.display = "none";
    }
}



