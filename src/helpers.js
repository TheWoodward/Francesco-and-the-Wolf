export const getGrid = ({layout, wolf, Francesco}) => {
    const grid = [];
    layout.forEach(square => {
        if (wolf.row == square.row && wolf.column == square.column){
            square.wolf = true;
        } else {
            square.wolf = false;
        }
        if (Francesco.row == square.row && Francesco.column == square.column){
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