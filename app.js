const dominoTiles = [
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [0, 6],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [2, 2],
  [2, 3],
  [2, 4],
  [2, 5],
  [2, 6],
  [3, 3],
  [3, 4],
  [3, 5],
  [3, 6],
  [4, 4],
  [4, 5],
  [4, 6],
  [5, 5],
  [5, 6],
  [6, 6],
];

const player1 = [];
const player2 = [];
const player3 = [];
const player4 = [];

const table = [];

// function to draw 7 random tiles to each player
function divideTiles(dominoTiles, player) {
  let i = 0;
  while (i < 7) {
    // draw the tile
    let tileDrawnIndex = Math.floor(Math.random() * dominoTiles.length);
    // take the tile from the pile
    let tileDrawn = dominoTiles.splice(tileDrawnIndex, 1);
    // add the pile drawn to player
    player.push(tileDrawn);
    i++;
  }
  //console.log("remaining tiles: ", dominoTiles.length);
}

// dividing 28 drawn tiles to 4 players
function gameInit() {
  divideTiles(dominoTiles, player1);
  divideTiles(dominoTiles, player2);
  divideTiles(dominoTiles, player3);
  divideTiles(dominoTiles, player4);
  console.log("the game begins: ", player1, player2, player3, player4);
}

// hard coding game
// first move
function firstMove(player, tileIndex) {
  chosenTile = player[tileIndex][0];
  table.push(chosenTile);
  delete player[tileIndex][0];
  console.log("table: ", table);
}

// next move
function nextMove(player, tileIndex) {
  tableEdgeLeft = table[0][0];
  tableEdgeRight = table[table.length - 1][1];
  tile = player[tileIndex][0];
  if (tile[0] === tableEdgeLeft) {
    console.log("right tile on the left");
    // IN THIS CASE IT IS NECESSARY TO REVERSE THE TILE
    table.unshift(tile.reverse());
    console.log("tile reversed");
    console.log("table updated: ", table);
  } else if (tile[1] === tableEdgeLeft) {
    table.unshift(tile);
    console.log("table updated: ", table);
  } else if (tile[0] === tableEdgeRight) {
    console.log("right tile on the right");
    table.push(tile);
    console.log("table updated: ", table);
  } else if (tile[1] === tableEdgeRight) {
    // IN THIS CASE IT IS NECESSARY TO REVERSE THE TILE
    table.push(tile.reverse());
    console.log("tile reversed");
    console.log("table updated: ", table);
  } else {
    console.log("wrong tile");
  }
}
