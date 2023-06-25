const gameboard = (() => {
    const board = [["X", "O", "X"], 
                   ["O", "X", "O"], 
                   ["O", "X", "O"]
                ];
    const gameBoardElement = document.createElement("div");
    gameBoardElement.setAttribute("class", "game-board")
    const displayBoard = () => {
        for (let r = 0; r < 3; r ++) {
            for (let c = 0; c < 3; c++) {
                const tileElement = document.createElement("div");
                tileElement.setAttribute("class", "tile");
                tileElement.innerHTML = board[r][c];
                gameBoardElement.appendChild(tileElement);
            }
        }
        document.body.appendChild(gameBoardElement);
    };
    return {board, displayBoard};
})();