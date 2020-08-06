function bestMove() {
    let bestScore = -Infinity;
    let move;

    for (let i =0; i < 9; i++){
        if(board[i] == ''){
            board[i] = ai;
            let score = minimax(board, 0, false);
            board[i] = '';
            
            if(score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }
    board[move] = ai;
    aiPlay();
    document.getElementById(move).appendChild(image);
    disableCell(move);
    winning_combinations();
    turn = human;
    
}

function minimax(board, maximizing) {
    let scores = {
        X: -10,
        O: 10,
        Tie: 0,
    };
    let result = checkWinner();

    if (result != "") {
        
        return scores[result];
    } 

    if (maximizing) {
        let bestScore = -Infinity;
        
        for (let i = 0; i < 9; i++) {
            if (board[i] == "") {
                board[i] = ai;
                let score = minimax(board, false);

                board[i] = "";
                if (score > bestScore) {
                    bestScore = score;
                }
                
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        
        for (let i = 0; i < 9; i++) {
            if (board[i] == "") {
                board[i] = human;
                let score = minimax(board, true);

                board[i] = "";
                if (score < bestScore) {
                    bestScore = score;
                }
                
            }
        }
        return bestScore;
    }
    
}