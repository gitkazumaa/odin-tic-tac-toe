const player = (() => {
    let playerTurn = "X";
    const setPlayerTurn = () => playerTurn === "X" ? playerTurn = "O" : playerTurn = "X";
    const markBoard = (tile, r, c) => {
        if (!gameboard.board[r][c]) {
            gameboard.board[r][c] = playerTurn;
            tile.innerHTML = playerTurn;
            setPlayerTurn();
        }
    }
    return {markBoard};
})();

const gameboard = (() => {
    const board = [["", "", ""], 
                   ["", "", ""], 
                   ["", "", ""]
                ];
    const gameBoardElement = document.createElement("div");
    gameBoardElement.setAttribute("class", "game-board")
    const displayBoard = () => {
        for (let r = 0; r < 3; r ++) {
            for (let c = 0; c < 3; c++) {
                const tileElement = document.createElement("div");
                tileElement.setAttribute("class", "tile");
                tileElement.innerHTML = board[r][c];
                tileElement.addEventListener("click", () => player.markBoard(tileElement, r, c)); 
                gameBoardElement.appendChild(tileElement);
            }
        }
        document.body.appendChild(gameBoardElement);
    };
    return {board, displayBoard};
})();