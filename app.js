var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector('#colorDisplay');
var message = document.getElementById("message");
var header = document.querySelector(".header");
var reset_button = document.querySelector("#reset");
var pickedColor,clickedColor;

var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(0, 255, 255)",
];

colorDisplay.textContent=pickColor();

reset_button.addEventListener("click",function(){
  for(var i=0;i<squares.length;i++){
    var index = Math.floor(Math.random()*squares.length)-1;
    squares[i].style.backgroundColor=colors[index];
  }
  header.style.backgroundColor="blue";
  pickedColor = pickColor();
})

function pickColor(){
 return colors[Math.floor(Math.random()*squares.length)-1];
}

for(var i =0;i<squares.length;i++){
  squares[i].style.backgroundColor=colors[i];

  squares[i].addEventListener("click",function(){
    clickedColor=this.style.backgroundColor;
    colorDisplay.textContent=pickedColor;

    if(clickedColor===pickedColor)
    {
      message.textContent="correct";
      header.style.backgroundColor=clickedColor;
      setAllColor();
    }
    else{
      message.textContent="try again!";
      this.style.backgroundColor="#232323";
    }
  })
}

function setAllColor(){
  for(var i=0;i<squares.length;i++)
  {
    squares[i].style.backgroundColor=clickedColor;
  }
}