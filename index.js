const playerController = (() => {
    let playersArray = [];
    let playerTurn = 0;

    const setPlayerTurn = () => playerTurn % 2 === 0 ? playerTurn = 0 : playerTurn = 1;

    const markBoard = (tile, r, c) => {
        if (!gameboard.board[r][c]) {
            let mark = playersArray[playerTurn].playerMarker;
            gameboard.board[r][c] = mark;
            tile.innerHTML = mark;
            console.log(isWin(mark, r, c));
            playerTurn++;
            setPlayerTurn();
        }
    }
    const isWin = (mark, r, c) => {
        let currentLength = 0;
        for (let col = 0; col < 3; col++) {
            if (gameboard.board[r][col] === mark) {
                currentLength++
            } else {
                break;
            }
        }
        if (currentLength === 3) return true;

        currentLength = 0;
        for (let row = 0; row < 3; row++) {
            if (gameboard.board[row][c] === mark) {
                currentLength++
            } else {
                break;
            }
        }
        if (currentLength === 3) return true;

        currentLength = 0;
        let col = 0;
        for (let row = 0; row < 3; row++) {
            if (gameboard.board[row][col] === mark) {
                currentLength++
                col++;
            } else {
                break;
            }
        }
        if (currentLength === 3) return true;

        currentLength = 0;
        col = 2;
        for (let row = 0; row < 3; row++) {
            if (gameboard.board[row][col] === mark) {
                currentLength++
                col--;
            } else {
                break;
            }
        }
        if (currentLength === 3) return true;
        return false;
    }

    return {playersArray, markBoard};
})();

const gameboard = (() => {
    const board = [["", "", ""], 
                   ["", "", ""], 
                   ["", "", ""]
                ];

    const gameBoardElement = document.createElement("div");
    gameBoardElement.setAttribute("class", "game-board");

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