const GameBoard = document.querySelector("#gameboard");
const player = document.querySelector("#player");
const info = document.querySelector("#game-info");
let go = "black";
player.textContent = go;
const startpieces =[
    rook,knight,bishop,queen,king,bishop,knight,rook,
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    rook,knight,bishop,queen,king,bishop,knight,rook
];

function CreateBoard(){
   startpieces.forEach((piece,i)=>{
    const square = document.createElement('div');
    square.innerHTML = piece;
    square.firstChild?.setAttribute('draggable',true)
    square.classList.add("square");
    square.setAttribute("square-id",i);
    const row = Math.floor((63-i)/8) + 1;
    if(row%2==0)
    {
        square.classList.add(i%2==0 ? "beige":"brown");
    }else
    {
        square.classList.add(i%2==0 ? "brown":"beige");
    }
    if(i<=15)
    {
    square.classList.add("black");
    }
    if(i>=48)
    {
    square.classList.add("white");

    }
    GameBoard.append(square);
   });
   
   
};
CreateBoard();
let startPos;
let draggedElement; 
 const allsquares = document.querySelectorAll('#gameboard .square');
 allsquares.forEach(square=>{
    square.addEventListener('dragstart',dragStart);
    square.addEventListener('dragover',dragOver);
    square.addEventListener('drop',drop);

 })
 function dragStart(e)
 {
    draggedElement = e.target;
    startPos =e.target.parentNode.getAttribute('square-id');
 }
 function dragOver(e)
 {
    e.preventDefault();
 }
 function drop(e)
 {
    e.stopPropagation();
    console.log("e.target"+e.target);
    console.log(draggedElement);
    e.target.append(draggedElement); 
    // e.target.parentNode.append(draggedElement);
    // e.target.remove();
    changego();

 }
 function changego()
 {
    if(go==="black")
    {
        go=="white";
        player.textContent = "white";
    }
    else
    {
        go=="black";
        player.textContent = "black ";
    }
 }