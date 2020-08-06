"use strict";
var turn, image;
var ai = 'O';
var human = 'X';
var board =  ["", "", "", "", "", "", "", "", ""];
var num = 0;
var count = 0;

const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

window.addEventListener("load", function () {
    title();
    drawBoard();
    // start();
    game();
});

function title() {
    let title, text;

    title = document.createElement("H1")
    text = document.createTextNode("Tic Tac Toe");
    title.appendChild(text);
    document.body.appendChild(title);
}

function drawBoard() {
    let layer, board, row, cell, btn;

    layer = document.createElement("div");
    board = document.createElement("table");

    for (let i = 0; i <= 2; i++) {
        row = document.createElement("tr");

        for (let j = 0; j <= 2; j++) {
            cell = document.createElement("td");
            cell.setAttribute("id", num);
            row.appendChild(cell);

            cell.addEventListener("click", drawXO);
            board[num];
            num++;

        }

        board.appendChild(row);

    }

    document.body.appendChild(board);

    // btn = document.createElement("button");
    // btn.innerHTML = "Start";
    // btn.setAttribute("id", "start");
    // document.body.appendChild(btn);
}

// function start() {
//     let start;

//     start = document.getElementById("start");
//     start.addEventListener("click", game);

//     turn = human;
// }

function game() {
    turn = human;
    drawXO();
}

function drawXO() {
    if(turn == human){
        
        humanPlay();
        this.appendChild(image);
        board[this.id] = human;
        disableCell(this.id);
        checkWinner();
        winning_combinations()
        turn = ai;
    }

    if(turn == ai) {
        bestMove();
    }

}

function humanPlay() {
    image = document.createElement("img");
    image.setAttribute("src", "static/src/img/x.png");
}

function aiPlay() {
    
    image = document.createElement("img");
    image.setAttribute("src", "static/src/img/o.png");
}

function disableCell(id) {
    document.getElementById(id).removeEventListener("click", drawXO);
}

function checkWinner() {
    let winner = "";

    WINNING_COMBINATIONS.forEach((combination) => {
        if (
            board[combination[0]] === "X" &&
            board[combination[1]] === "X" &&
            board[combination[2]] === "X"
        ) {
            winner = human;
        } else if (
            board[combination[0]] === "O" &&
            board[combination[1]] === "O" &&
            board[combination[2]] === "O"
        ) {
            winner = ai;
        }
    });
    if (winner === "") {
        let value = 0;
        board.forEach((item) => {
            if (!(item === "")) {
                value += 1;
            }
        });
        if (value === 9) {
            winner = "Tie";
        } else {
            winner = "";
        }
    }
    
    return winner;
}

function winning_combinations(){
    count++;
    console.log(count)
    WINNING_COMBINATIONS.forEach((combination) => {
        if (
            board[combination[0]] === "X" &&
            board[combination[1]] === "X" &&
            board[combination[2]] === "X"
        ) {
            alert("You win")
            window.location.reload();
        } else if (
            board[combination[0]] === "O" &&
            board[combination[1]] === "O" &&
            board[combination[2]] === "O"
        ) {
            alert("I win")
            window.location.reload();
        }
    });
    if (count == 9) {
        alert("Tie");
        window.location.reload();
    } 
}
