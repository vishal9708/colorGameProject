var pickedColor,clickedColor;
var colors = [];
var numOfSquares=6;
var squares = document.querySelectorAll(".square");
var mode_button = document.querySelectorAll(".mode");
var colorDisplay = document.querySelector('#colorDisplay');
var message = document.getElementById("message");
var header = document.querySelector(".header");
var reset_button = document.querySelector("#reset");

//start function
main();

function main(){
  setModeOfGame();
  setSquareColor();
  reset();
}

//Easy or hard => game mode change
function setModeOfGame()
{

  for(var i=0;i<mode_button.length;i++){

      mode_button[i].addEventListener("click",function(){
           mode_button[0].classList.remove("select-class");
           mode_button[1].classList.remove("select-class");

           this.classList.add("select-class");
           if(this.textContent==="Easy" ){
              numOfSquares=3;
           }
            else{
              numOfSquares=6;
           }
         reset();
      });
      
  }
}

//fill random color to colors array
function getColorsArray()
{
  var arr=[];
    for(var i=0;i<numOfSquares;i++)
    {
      arr.push(`rgb(${getRGBvalue()}, ${getRGBvalue()}, ${getRGBvalue()})`);
    }
   return arr;
}


//setting color to the color array
function setSquareColor()
{
      //Action on clicking on each square, checking whether 
      //picked color === clicked color or not.
    for(var i=0;i<squares.length;i++){
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

   colors = getColorsArray(numOfSquares);

      for(var i=0;i<squares.length;i++){
        if(colors[i]){
          squares[i].style.display="block";
          squares[i].style.backgroundColor=colors[i];
        }
        else{
          squares[i].style.display="none";
        }
      }

      reset_button.textContent="New Color";
      header.style.backgroundColor="steelblue";
      message.textContent=" ";
      pickedColor = colors[Math.floor(Math.random()*colors.length)];
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
    header.style.backgroundColor="yellow";
    for(var i=0;i<squares.length;i++)
    {
      squares[i].style.backgroundColor=clickedColor;
    }
}
