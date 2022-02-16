export const getGrid = data => {
    const grid = [];
    data.forEach(square => {
        if (grid[square.row-1]){
            grid[square.row-1].push(square)
        } else {
            grid.push([square])
        }
    });
    console.log(grid)
    return grid;
}