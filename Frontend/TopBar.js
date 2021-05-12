//This is to allow the sizes of the top bar to scale with the window size.
topBar = document.getElementById("topBar");
MainLogo = document.getElementById("CHS_LOGO");

function UpdateTopBarDimensions()
{
    topBar.style.width = window.innerWidth;

    MainLogo.style.left = (window.innerWidth / 2) - (MainLogo.width / 2);
}

setInterval(UpdateTopBarDimensions,16);