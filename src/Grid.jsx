import Square from "./Square";

const Grid = ({ data }) => {
  console.log("hello", data);
  return (
    <div>
      {data.map((row) => {
        console.log(row);
        return (
          <tr>
            {row.map((squareData) => {
              console.log(squareData);
              return (
                <Square
                  row={squareData.row}
                  column={squareData.column}
                  borders={squareData.borders}
                ></Square>
              );
            })}
          </tr>
        );
      })}
    </div>
  );
};

export default Grid;
