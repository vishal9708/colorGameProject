var pickedColor,clickedColor;
var colors = [];
var numOfSquares=6;
var squares = document.querySelectorAll(".square");
var mode = document.querySelector('.mode');
var colorDisplay = document.querySelector('#colorDisplay');
var message = document.getElementById("message");
var header = document.querySelector(".header");
var reset_button = document.querySelector("#reset");

main();

function main(){
  setModeOfGame();
  fillColorsArray();
  setSquareColor();
}

//Easy or hard => game mode change
function setModeOfGame()
{
    for(var i=0;i<mode.length;i++){
      mode[i].addEventListener("click", function(){
        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");

        this.classList.add("selected");
        this.textContent="Easy" ? numOfSquares=3 : numOfSquares=6;

        fillColorsArray(numOfSquares)
      })
    }
}

//fill random color to colors array
function fillColorsArray(num)
{
    for(var i=0;i<squares.length;i++)
    {
      colors.push(`rgb(${getRGBvalue()}, ${getRGBvalue()}, ${getRGBvalue()})`);
    }
}


function setSquareColor()
{
      pickedColor = colors[Math.floor(Math.random()*squares.length)];
      //display the rgb value to the header display
      colorDisplay.textContent=pickedColor;
      
      //setting up color of all square.
      for(var i =0;i<squares.length;i++){
          squares[i].style.backgroundColor=colors[i];
          squares[i].style.display="block";
      
      
      //Action on clicking on each square, checking whether 
      //picked color === clicked color or not.
      squares[i].addEventListener("click",function(){
          clickedColor=this.style.backgroundColor;
        
          if(clickedColor===pickedColor)
          {
              reset_button.textContent=" Play Again "
              message.textContent="correct";
              setAllColor();
          }
          else
          {
              message.textContent="try again!";
              this.style.backgroundColor="#232323";
          }
      })
      }
}

//Action for reset/new game button, changing the color of all square(unique color)
reset_button.addEventListener("click",function(){
  reset();
})



function reset(){
      var arr=[];
      var RandomIndex;
      while(arr.length<6)
      {
        RandomIndex = Math.floor(Math.random()*squares.length);
        if(arr.indexOf(RandomIndex)===-1)
        {
          arr.push(RandomIndex);
        }
      }

      for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[arr[i]];
      }
      reset_button.textContent="New Color";
      header.style.backgroundColor="steelblue";
      message.textContent=" ";
      pickedColor = colors[Math.floor(Math.random()*squares.length)];
      colorDisplay.textContent=pickedColor;
}


//funtion to give a random number from 0 to 255.
function getRGBvalue()
{
    var number = Math.floor(Math.random()*256);
    return number;
}


 //set all color of the square to clicked color, if it matches
//with the picked color.
function setAllColor(){
    header.style.backgroundColor=clickedColor;
    for(var i=0;i<squares.length;i++)
    {
      squares[i].style.backgroundColor=clickedColor;
    }
}