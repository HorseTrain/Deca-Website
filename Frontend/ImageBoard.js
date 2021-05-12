ButtonWidth = 100;

imgBoard = document.getElementById("ImageBoard");
topStrip = document.getElementById("ImageBoardStrip");

Buttons = [

    document.getElementById("HOME_BUTTON"),
    document.getElementById("ABOUTUS_BUTTON"),
    document.getElementById("PLACE_HOLDER0"),
];

MouseOverChecks = [];

//I Really don't like this lmao
Buttons[0].addEventListener("mouseenter", function(  ) {MouseOverChecks[0] =true;});
Buttons[0].addEventListener("mouseout", function(  ) {MouseOverChecks[0] =false;});

Buttons[1].addEventListener("mouseenter", function(  ) {MouseOverChecks[1] =true;});
Buttons[1].addEventListener("mouseout", function(  ) {MouseOverChecks[1] =false;});

Buttons[2].addEventListener("mouseenter", function(  ) {MouseOverChecks[2] =true;});
Buttons[2].addEventListener("mouseout", function(  ) {MouseOverChecks[2] =false;});

function UpdateImageBoard()
{
    imgBoard.style.left = (window.innerWidth/2) - (Int(imgBoard.style.width) / 2);
    imgBoard.style.top = MainLogo.height + Int(MainLogo.style.top) + 25;

    topStrip.style.width = imgBoard.style.width;

    height = Int(topBar.style.height) - Int(imgBoard.style.top) - 10; //I Really hate javascript.

    intervals = 200;

    TotalLength = (intervals * Buttons.length) + 100;

    for (i = 0; i < Buttons.length; i++)
    {
        Button = Buttons[i];

        Button.style.height = height;
        Button.style.width = ButtonWidth;
        Button.style.left = (i * intervals) + (((Int(imgBoard.style.width) / 2) - (TotalLength / 2)) + (intervals / 2));
    
        Button.style.backgroundColor = "rgb(36, 36, 36)";

        if (MouseOverChecks[i] == true)
        {
            Button.style.backgroundColor = "#7c090c";
        }
    }
}

setInterval(UpdateImageBoard,33);