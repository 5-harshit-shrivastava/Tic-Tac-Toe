let turn='O';
let total_turn=0;

let winner=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

const board_array=new Array(9).fill("E");

function check(){
    for(let [idx1,idx2,idx3] of winner){
        if(board_array[idx1]!="E" && board_array[idx1]===board_array[idx2] && board_array[idx2]===board_array[idx3])
            return 1;
    }
    return 0;
}

const printer=(event)=>{
    const elem=event.target;
    
    if(board_array[elem.id]==="E"){
        total_turn++;
    if(turn==='O'){
         elem.innerHTML="O";
         board_array[elem.id]="O";
         if(check()){
           document.getElementById('winning_game').innerHTML="Winner is O";
           board.removeEventListener('click',printer);
           return;

         }
         turn="X";
    }
    else{
        elem.innerHTML="X";
        board_array[elem.id]="X";
        if(check()){
            document.getElementById('winning_game').innerHTML="Winner is X";
            board.removeEventListener('click',printer);
            return;
          }
        turn="O";
    }
    if(total_turn==9){
        document.getElementById('winning_game').innerHTML="Match is Draw";
    }
    }
}
const board=document.querySelector('.board');
board.addEventListener('click',printer);


const restart=document.getElementById("restart-game");
restart.addEventListener('click',()=>{
    const cell=document.getElementsByClassName('cell')

    Array.from(cell).forEach((value)=>{
        value.innerHTML="";
    })
    turn="O";
    total_turn=0;

    board_array.fill("E");
    document.getElementById('winning_game').innerHTML="";
    board.addEventListener('click',printer);
})
