function setup() {
  createCanvas(700,500);
  background("red"); //função para pintar o fundo
}

function draw() {
 stroke("blue");//alterando a cor da borda de desenho
  fill("pink");//alterar a cor e preenchimento do desenho 


if(mouseIsPressed){
  
  rect(mouseX,mouseY, 900,100);
  }
}