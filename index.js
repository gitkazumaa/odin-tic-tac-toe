const playerController = (() => {
    let playersArray = [];
    let playerTurn = 0;
    const setPlayerTurn = () => playerTurn % 2 === 0 ? playerTurn = 0 : playerTurn = 1;
    const markBoard = (tile, r, c) => {
        if (!gameboard.board[r][c]) {
            let mark = playersArray[playerTurn].playerMarker;
            gameboard.board[r][c] = mark;
            tile.innerHTML = mark;
            playerTurn++;
            setPlayerTurn();
        }
    }
    return {playersArray, markBoard};
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
                tileElement.addEventListener("click", () => playerController.markBoard(tileElement, r, c)); 
                gameBoardElement.appendChild(tileElement);
            }
        }
        document.body.appendChild(gameBoardElement);
    };
    return {board, displayBoard};
})();

const player = (name) => {
    const playerName = name;
    const playerMarker = playerController.playersArray.length === 0 ? "X" : "O";
    return {playerName, playerMarker};
}

const player1 = player("Joe");
playerController.playersArray.push(player1);
const player2 = player("Mama");
playerController.playersArray.push(player2);