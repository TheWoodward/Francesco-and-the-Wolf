//TODO: test file
export const getInitialGrid = ({layout, wolf, Francesco}) => {
    const grid = [];
    layout.forEach(square => {
        if (wolf.row === square.row && wolf.column === square.column){
            square.wolf = true;
        } else {
            square.wolf = false;
        }
        if (Francesco.row === square.row && Francesco.column === square.column){
            square.francesco = true;
        } else {
            square.francesco = false;
        }
        if (grid[square.row-1]){
            grid[square.row-1].push(square)
        } else {
            grid.push([square])
        }
    });
    return grid;
}

export const getGridAfterMove = (grid,character,direction) => {
    //TODO: add boundary limits
    //TODO: add wall limits
    let row = 0;
    let column = 0;
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[i].length; j++){
            if (grid[i][j][character]){
                row = i;
                column = j;
                grid[i][j][character] = false;
            }
        }
    }

    switch (direction) {
        case "up":
          row-=1;
          break;
        case "down":
          row+=1;
          break;
        case "left":
          column-=1;
          break;
        case "right":
            column+=1;
            break;
        default:
          break;
      }

    grid[row][column][character] = true;
    return grid;
}